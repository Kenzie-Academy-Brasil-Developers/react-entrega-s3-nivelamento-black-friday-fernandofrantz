const Product = ({ item, promo, setCurrentSale, currentSale }) => {
  const handleBuy = (prod) => {
    setCurrentSale([...currentSale, prod]);
  };

  return (
    <>
      <div>
        <h3>{item.name}</h3>
        {console.log(item)}

        <h5>Valor original: </h5>
        <h4>R${item.price.toFixed(2)}</h4>

        <h5>Porcentagem de desconto: </h5>
        <h4>{promo}%</h4>

        <h5>Valor descontado: </h5>
        <h4>R${((item.price * promo) / 100).toFixed(2)}</h4>

        <h5>Preço final:</h5>
        <h4>R${(item.price - (item.price * promo) / 100).toFixed(2)}</h4>

        <button onClick={() => handleBuy(item)}>Add to cart</button>
      </div>
    </>
  );
};
export default Product;
