

import Hero from "@/components/hero";
import ProductsRange from "@/components/range";
import OurProducts from "@/components/products";
import Inspiration from "@/components/inspiration";
import Setup from "@/components/setup";



export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
    <Hero/>
    <ProductsRange/>
    <OurProducts/>
    <Inspiration/>
    <Setup/>
   </div>
  );
}
