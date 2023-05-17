import Head from "next/head";
import ProductPageContent from "@components/ProductPageContent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import { getProduct } from "@api/getProduct";

export default function ProductPage({ product }) {
  return (
    <div className="container">
      <Head>
        <title>Life Fitness | Buy {product.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="product-page">
        <article>
          <ProductPageContent product={product} />
        </article>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProductList();
  // let routes = products.map((p) => {
  //   const params = `/product/${p.node.handle}`;
  //   return params;
  // });

  return { paths: products.map((p) => ({ params: { product: p?.node?.handle} })), fallback: false };
}

export async function getStaticProps({ params }) {
  let product = await getProduct({ itemHandle: params.product});

  return {
    props: {
      product: product.productByHandle,
    },
  };
}
