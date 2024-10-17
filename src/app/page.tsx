

import Hero from "@/components/hero";
import ProductsRange from "@/components/range";
import OurProducts from "@/components/products";
import Inspiration from "@/components/inspiration";
import Setup from "@/components/setup";
import Footer from "@/components/footer";


export default function Home() {
  return (
   <div>
    <Hero/>
    <ProductsRange/>
    <OurProducts/>
    <Inspiration/>
    <Setup/>
    <Footer/>
   </div>
  );
}
