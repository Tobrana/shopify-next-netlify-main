import Head from "next/head";
import Banner from "@components/Banner";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import Carousel from "@components/Carousel";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Life Fitness</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header />
      <Carousel/>
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
