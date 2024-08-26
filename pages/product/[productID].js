import { useRouter } from "next/router";

const ProductID = () => {
  const router = useRouter();

  const productID = router.query.productID;

  return <div className="bg-white">This is product ID {productID}</div>;
};

export default ProductID;
