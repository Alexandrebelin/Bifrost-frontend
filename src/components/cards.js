const Cards = ({ data }) => {
  return (
    <div className="cards">
      <img src={data.image.secure_url} alt="cards homePage" />
      <h3>{data.title}</h3>
      <span>{data.quantitie}</span>
      <span>{data.price}</span>
    </div>
  );
};

export default Cards;
