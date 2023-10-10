import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import Header from "../components/Header";
import Menu from "../components/Menu";
import EditProductDetails from "../components/EditProductDetails";

const EditProductPage = () => {
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
        <EditProductDetails productData={productData} loading={loading} />
      </div>
    </div>
  );
};

export default EditProductPage;
