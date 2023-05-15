import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Cart from '@components/Cart';
import { useAppContext } from '../state';
import { useEffect, useState } from 'react';

export default function CartPage() {

  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    const getPromotionForCart = async () => {
      try {      
        const res = await fetch('/has-something-in-cart');
        const data = await res.json();
        if (data.promotion) {
          setPromotion(data.promotion);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getPromotionForCart();

  }, []);

  return (
    <>
      <Head>
        <title>Life Fitness | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="cart-page">
        <article className="cart-page-content">
          <h1>Your cart</h1>

          {promotion && (
            <div className="promotion">
              <h2><span className='just-for-you'>Promotion just for you</span> {promotion.title}</h2> 
              <p>{promotion.description}</p>
            </div>
          )}
          <Cart />
        </article>
      </main>
      <Footer />
    </>
  );
}
