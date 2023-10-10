import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setConfiguration } from "./store/configurationSlice";

export const BASE_URL = "https://api-test.innoloft.com";

function App() {
  const dispatch = useDispatch();
  const configuration = useSelector((state) => state?.appConfig);

  const [loading, setLoading] = useState(true);

  const [productData, setProductData] = useState(null);
  const [productDataloading, setProductDataLoading] = useState(true);

  const appId = import.meta.env.VITE_APP_ID || 1;

  useEffect(() => {
    fetch(`${BASE_URL}/product/6781/`)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res);
        setProductDataLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setProductDataLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/configuration/${appId}/`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setConfiguration(res));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (productDataloading || loading) {
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
        {configuration?.hasUserSection && <Menu data={productData} />}
      </div>
    </div>
  );
}

export default App;
