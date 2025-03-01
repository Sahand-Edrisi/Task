import React from "react";
import Products from "./Products";
import Product from "./Product";
import NotProduct from "./NotProduct";
import SkeletonProducts from "./SkeletonProducts";
import SkeletonSearch from "./SkeletonSearch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchProductById } from "../redux/Slice";
import { useEffect } from "react";
function Form() {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const {
    productsData: products,
    productsStatus,
    productsError,

    productData: product,
    productStatus,
    productError,
  } = useSelector((state) => state.products || state.product);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmitData = (data) => {
    setId(Number(data.id));
    setValue("id", "");
    dispatch(fetchProductById(Number(data.id)));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productsStatus === "loading" || productStatus === "loading")
    return (
      <div className="text-center m-[10px] grid justify-center mt-[100px] ">
        <div className="flex justify-center">
          <SkeletonSearch />
        </div>
        <div className="flex flex-wrap justify-center">
          <SkeletonProducts />
          <SkeletonProducts />
          <SkeletonProducts />
          <SkeletonProducts />
          <SkeletonProducts />
          <SkeletonProducts />
        </div>
      </div>
    );
  if (productsStatus === "failed" || productError === "failed")
    return <p>error {productsError}</p>;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitData)}
        className=" flex justify-center p-10 "
      >
        <input
          id="input"
          type="number"
          {...register("id")}
          placeholder="Enter Number"
          className="mr-5 rounded-2xl focus:border-black"
        />
        <button
          type="submit"
          className="border p-2 border-gray-800 rounded-2xl"
        >
          مشاهده
        </button>
      </form>
      {id === null ? (
        <div className="flex flex-wrap justify-around">
          {products.map((product) => (
            <div key={product.id} className="m-[10px] flex mt-[100px]">
              <Products products={product} />
            </div>
          ))}
        </div>
      ) : productStatus !== "failed" ? (
        <div className="flex flex-wrap justify-around">
          <Product product={product} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-around">
          <NotProduct />
        </div>
      )}
    </>
  );
}

export default Form;
