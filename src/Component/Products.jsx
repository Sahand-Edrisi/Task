import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import NotProduct from "./NotProduct";

function Products({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const response = axios.get(`https://rotikala.chbk.app/products`);
    response
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      })
      .catch((e) => {
        console.log(e.massage);
      });
  }, []);

  let selectItems = [];
  if (product !== null) {
    product.map((item) => {
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
<NotProduct/>
      )}
    </>
  );
}

export default Products;
