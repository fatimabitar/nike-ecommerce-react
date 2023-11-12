import React from "react";
import Hero from "./components/Hero";
import Salse from "./components/Salse";
import {
  popularsales,
  toprateslaes,
  heroapi,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Salse endpoint={popularsales} ifExists={true} />
        <FlexContent endpoint={highlight} ifExists={true} />
        <Salse endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
};

export default App;
