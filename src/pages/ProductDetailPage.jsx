import React, { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductDetails from "../components/ProductDetails.jsx";

const ProductDetailPage = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/product/6781/`)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center font-extrabold text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <Header data={productData} />
      <div className="flex justify-center gap-[30px] px-[10px]">
        <Menu data={productData} />
        <ProductDetails productData={productData} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
