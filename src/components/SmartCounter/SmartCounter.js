import { useState } from "react";

export function SmartCounter() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={() => setQuantity(quantity + 1)}>Aumentar</button>
    </>
  );
}
