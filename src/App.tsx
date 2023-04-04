import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {});

  return (
    <div>
      <ProductList />{" "}
    </div>
  );
}

export default App;
