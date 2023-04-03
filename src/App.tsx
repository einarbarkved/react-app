import { useState } from "react";
import Like from "./components/Like";

function App() {
  const items = ["Sau", "Ku"];
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
