import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <ProductDetailPage />,
  },
  {
    path: "/product/edit",
    element: <EditProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
