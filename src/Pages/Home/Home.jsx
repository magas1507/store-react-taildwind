import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


export function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        console.log(jsonData);
        setItems(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((product) => (
          <Card
            key={product.id}
            {...product} />
        ))}
      </div>
      <Card />
      <ProductDetail />
    </Layout>
  );
}
