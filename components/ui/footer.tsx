import React from "react";
import Container from "./container";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="border border-t-[#292929]">
      <Container>
        <div className="text-white py-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">
            PINJ
            <Logo />C
          </h1>
          <p>All right reserved - {new Date().getFullYear()} </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
