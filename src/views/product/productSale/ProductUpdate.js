import React from "react";

const ProductUpdate = ({
  categories,
  content,
  cost_price,
  sale_price,
  tags,
}) => {
  console.log("categories", categories);
  console.log("content", content);
  console.log("cost_price", cost_price);
  console.log("sale_price", sale_price);
  console.log("tags", tags);
  return (
    <>
      {/* <select>{categories}</select> */}
      {/* <span>{content}</span>
      <br />
      <span>{cost_price}</span>
      <span>{sale_price}</span> */}
      {/* <div>{tags}</div> */}
      test
    </>
  );
};

export default ProductUpdate;
