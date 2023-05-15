import Link from 'next/link';
import { useAppContext } from "../state";
import Search from './Search';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('E9A3W2O17D', 'b7af3955ee1ffeff4c0ec6d6fb626b67');


export default function Header() {
  const { cartCount } = useAppContext();

  return (
    <header className="app-header">
      <h1>
        <Link href="/">
          Life Fitness
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
            All Products
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="/cart">
              <span className="cart cartLink">Shopping Cart {cartCount > 0 && <div className="badge">{cartCount}</div>}</span>
            </Link>
          </li>
        </ul>
        
      </nav>

      <Search />
      
    </header>
  );
}
