import React from "react";
import Products from "./Products";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchProductById } from "../redux/Slice";
import { useEffect } from "react";
import { Spinner } from "flowbite-react";
function Form() {
  const [id, setId] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmitData = (data) => {
    setId(Number(data.id));
    setValue("id", "");
  };
  const dispatch = useDispatch();
  const {
    productsData: products,
    productsStatus,
    productsError,

    productData: product,
    productStatus,
    productError,
  } = useSelector((state) => state.products || state.product);

  console.log(product);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchProductById(id));
  }, [dispatch]);

  if (productsStatus === "loading" || productStatus === "loading")
    return (
      <div className="text-center m-[10px] flex justify-center mt-[100px] ">
        <div className="w-[220px] h-[60px] flex justify-center p-[10px] bg-green-900 rounded-lg">
          <Spinner size="xl" className="mr-[10px]" color="success" />
          <span className="text-[30px] text-white">Loading ...</span>
        </div>
      </div>
    );
  if (productsStatus === "failed" || productError === "failed")
    return <p>error {productsError}</p>;

  // const product = products.filter((item) => item.id === id);
  console.log(id);
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
            <div
              key={product.id}
              className="m-[10px] flex mt-[100px]"
            >
              <Products products={product} />
            </div>
          ))}
        </div>
      ) : undefined}
    </>
  );
}

export default Form;
