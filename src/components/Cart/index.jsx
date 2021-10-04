const Cart = ({ currentSale, promo }) => {
  return (
    <>
      <div>
        {currentSale && <h1>Cart: </h1>}
        {currentSale &&
          currentSale.map((item) => (
            <div>
              <h3>{item.name}</h3>

              <h5>Valor original: </h5>
              <h4>R${item.price.toFixed(2)}</h4>

              <h5>Porcentagem de desconto: </h5>
              <h4>{promo}%</h4>

              <h5>Valor descontado: </h5>
              <h4>R${((item.price * promo) / 100).toFixed(2)}</h4>

              <h5>Preço final:</h5>
              <h4>R${(item.price - (item.price * promo) / 100).toFixed(2)}</h4>
            </div>
          ))}
      </div>
    </>
  );
};
export default Cart;
