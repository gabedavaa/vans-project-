import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import "./server";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Dashbroad from "./pages/Host/Dashbroad";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashbroad />} loader={async () => null} />
        <Route path="income" element={<Income />} loader={async () => null} />
        <Route path="reviews" element={<Reviews />} loader={async () => null} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          // loader={async () => null}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVansDetailLoader}
        >
          <Route index element={<HostVanInfo />} loader={async () => null} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => null}
          />
          <Route
            path="photos"
            element={<HostVanPhoto />}
            loader={async () => null}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
