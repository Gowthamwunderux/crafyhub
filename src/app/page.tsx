import React from "react";
import Image from "next/image";
import Header from "./components/header/header";
import Hiring from "./hiring/page";
import Footer from "./components/footer/page";
export default function Home() {
  return (
    <>     
      <Header />
      <Hiring />
      <Footer/>
    </>
  );
}
