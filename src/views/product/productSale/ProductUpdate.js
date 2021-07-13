import React from "react";

const ProductUpdate = (props) => {
  const { location } = props;
  const { state } = location;
  console.log(state);
  return (
    <>
      {/* <select>{categories}</select> */}
      <span>{state.record.content}</span>
      <br />
      {/* <span>{state.cost_price}</span> */}
      <span>{state.record.sale_price}</span>
      {state.record.thumbnails.map((item) => {
        const test = `${item.url}`;
        console.log(test);
        return (
          <>
            <img src={test} alt="" />
          </>
        );
      })}
    </>
  );
};

export default ProductUpdate;
