import React from "react";

export default function page({
  params,
}: {
  params: {
    "price-id": string;
  };
}) {
  return <div>{params["price-id"]}</div>;
}
