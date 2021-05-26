import { useParams } from "react-router-dom";

const ProductById = () => {
  const { id } = useParams();

  console.log(id);
  return <div>{id}</div>;
};

export default ProductById;
