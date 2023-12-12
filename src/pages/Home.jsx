import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "muñeca" || item.category === "terror"
  );
  const bestSales = products.filter((item) => item.category === "mesa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Descuentos"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="Novedades"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Mejores Ventas" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
