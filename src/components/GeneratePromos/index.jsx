import { useState } from "react";

const GeneratePromos = ({
  setRandomProduct,
  setPromo,
  product,
  randomProduct,
  promo,
}) => {
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 6 + 1));

  const handleGenerateRandom = () => {
    setPromo(Math.floor(Math.random() * 6 + 4) * 10);
    setRandomProduct(product.filter((item) => item.id === randomId));
    setRandomId(Math.floor(Math.random() * 6 + 1));
  };

  return (
    <>
      <div>
        <button onClick={handleGenerateRandom}>Generate promo</button>
      </div>
    </>
  );
};
export default GeneratePromos;
