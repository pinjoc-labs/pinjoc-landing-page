import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="border border-t-[#292929]">
      <Container>
        <div className="text-white py-8">
          <p>PINJOC © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
