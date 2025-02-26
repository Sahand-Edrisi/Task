import Product from "./Product";
import NotProduct from "./NotProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Slice";
import { useEffect } from "react";

function Products({ id }) {
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    error,
  } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>is Loading ...</p>;
  if (status === "Failed") return <p>error {error}</p>;

  let selectItems = [];
  if (products !== null) {
    products.map((item) => {
      if (item.id === id) {
        return selectItems.push(item);
      } else {
        return undefined;
      }
    });
  }

  return (
    <>
      {selectItems.length > 0 ? (
        <Product product={selectItems[0]} />
      ) : (
        <NotProduct />
      )}
    </>
  );
}

export default Products;
