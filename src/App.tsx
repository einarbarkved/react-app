import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Sau", "Ku"];
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Click meeee
      </Button>
      <ListGroup
        items={items}
        heading="Hello"
        onSelectItem={() => console.log("Clikkd")}
      ></ListGroup>
    </div>
  );
}

export default App;
