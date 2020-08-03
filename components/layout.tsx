import React from "react";
import { Container } from "@material-ui/core";

import Header from "./header";
import Footer from "./footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
