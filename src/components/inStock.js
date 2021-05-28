const InStock = ({ data }) => {
  let stock = "";
  if (data > 0) {
    stock = "En stock";
  } else {
    stock = "En rupture de stock";
  }

  return <span className={data > 0 ? "green" : "red"}>{stock}</span>;
};

export default InStock;
