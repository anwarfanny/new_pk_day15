import React from "react";
import Index from "./pages/index";
import { Container } from "react-bootstrap";
import Navs from "./component/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navs />
      <Container>
        <Index />
      </Container>
    </div>
  );
}

export default App;
