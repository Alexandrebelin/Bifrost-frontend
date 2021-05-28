import InStock from "../components/inStock";

const Cards = ({ data, stock }) => {
  return (
    <div className="cards">
      <img src={data.image.secure_url} alt="cards homePage" />
      <div>
        <h3>{data.title}</h3>
        <InStock data={data.quantitie} />
        <span>{data.price} €</span>
      </div>
    </div>
  );
};

export default Cards;
