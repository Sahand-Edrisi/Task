import CardItem from "./Component/CardItem";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const response = axios.get("https://rotikala.chbk.app/products/4/");
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
  return (
    <div className="text-center w-[100%] flex justify-center mt-[100px]">
      {product.product !== undefined ? <CardItem product={product.product} /> : undefined}
    </div>
  );
}

export default App;
