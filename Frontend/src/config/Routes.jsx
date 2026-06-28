import React from "react";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../utils/ScrollToTop";

export default function Routes() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Navigation />
      <Footer />
    </>
  );
}
