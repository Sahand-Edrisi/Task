import React from "react";
import Products from "./Products";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Form() {
  const [id, setId] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmitData = (data) => {
    setId(Number(data.id))
    document.getElementById("input").value=""
  };
  
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitData)}
        className="w-full flex justify-center p-10 "
      >
        <input
        id="input"
          type="number"
          {...register("id")}
          placeholder="Enter Number"
          className="mr-5 rounded-2xl focus:border-black"
        />
        <input
          type="submit"
          className="border p-2 border-gray-800 rounded-2xl"
        />
      </form>
      {id !== null ? (
        <div className="text-center w-[100%] flex justify-center mt-[100px]">
          <Products id={id} />
        </div>
      ) : undefined}
    </>
  );
}

export default Form;
