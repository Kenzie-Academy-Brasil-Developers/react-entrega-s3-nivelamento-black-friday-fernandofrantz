import Product from "../Product";

const ProductList = ({ randomProduct, promo, setCurrentSale, currentSale }) => {
  return (
    <>
      <div>
        <h1>Store: </h1>
        {randomProduct.map((item, index) => (
          <Product
            key={index}
            item={item}
            promo={promo}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        ))}
      </div>
    </>
  );
};
export default ProductList;
