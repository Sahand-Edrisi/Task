import React, { useState } from "react";
import { Card } from "flowbite-react";
import Product from "../Data/Data";
import bagImage from "../Data/img/bag-img.avif";

function CardItem() {
  const [product] = useState(Product);

  return (
    <div className="cardContainer">
      {product.map((product, index) => (
        <Card key={index} className="max-w-sm p-3">
          <img
            src={bagImage}
            alt=""
            className="w-[100%] h-[300px] object-cover "
          />
          <a href=" #">
            <h5 className="text-[25px] font-bold tracking-tight text-right text-gray-600 dark:text-white">
              {product.Name}
            </h5>
            <h5 className="text-[25px] font-semibold tracking-tight text-right text-gray-600 dark:text-white">
              {product.Model}
            </h5>
          </a>
          <span className="text-[28px] text-left h-4 font-bold text-gray-500 dark:text-white ">
            <div className="h-1 w-[100px] mt-[19px] bg-red-600 absolute z-10 "></div>
            {product.price}
          </span>
          <div className="flex items-center justify-between ">
            <div className="flex ">
              <span className="text-[28px] font-bold text-green-400 dark:text-white pr-[5px]">
                {product.MonetaryUnit}
              </span>
              <span className="text-[30px] font-bold text-green-400 dark:text-white ">
                {product.DiscountedPrice}
              </span>
            </div>
            <span className="text-[20px] bg-red-500 px-2 ml-[20px] text-gray-300 font-bold rounded-xl">
              {product.DiscountPercentage}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardItem;
