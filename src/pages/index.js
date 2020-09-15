import React from "react";
import Cards from "../component/Card/Card";
import Forms from "../component/Form/Form";
import Modals from "../component/Modal/Modal";

const index = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Cards />
      <hr />
      <Forms />
      <hr />
      <Modals />
    </div>
  );
};

export default index;
