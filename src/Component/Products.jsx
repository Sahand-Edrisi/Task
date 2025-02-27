import { Card } from "flowbite-react";
import Img from "../image/hal-gatewood-Pr578ZCufII-unsplash.jpg";

function Products({ products }) {
  return (
    <div className="cardContainer ">
      <Card className="max-w-sm p-3 h-[550px] w-[400px]">
        <img src={Img} alt="" className="w-[350px] h-[300px] object-cover " />
        <p className="text-[19px] font-bold tracking-tight text-right text-gray-600 dark:text-white">
          {products.nameFa}
        </p>
        <p className="text-[19px] font-bold tracking-tight text-right text-gray-600 dark:text-white">
          <span> رنگ :</span>{" "}
          {products.color[0] ? products.color[0].color : undefined}
        </p>
        <span className="text-[28px] text-right h-4 font-bold text-gray-500 dark:text-white ">
          <span> قیمت : </span>
          {products.price}
        </span>
        <div className="flex items-center justify-between ">
          <div className="flex ">
            <span className="text-[28px] font-bold text-green-400 dark:text-white pr-[5px]">
              {products.MonetaryUnit}
            </span>
          </div>
          <span className="text-[20px] bg-red-500 px-2 ml-[20px] text-gray-300 font-bold rounded-xl">
            {products.DiscountPercentage}
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Products;
