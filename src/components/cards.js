import InStock from "./InStock";

const Cards = ({ data }) => {
  return (
    <div className="cards" data-testid="phoneCards">
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
