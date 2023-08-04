import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { ProductItem } from "../index";
import styles from "./Products.module.css";

const ref = collection(db, "products");
const sortedRef = query(ref, orderBy("name"));

const Products = () => {
  const [data, isLoading] = useCollectionData(sortedRef);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.products}>
      {data.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
