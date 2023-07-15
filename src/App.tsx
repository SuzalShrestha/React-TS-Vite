import Alerts from "./Alerts";
import Buttons from "./Buttons";
import GroupList from "./GroupList";
import { useState } from "react";

function App() {
  const items = ["John", "James", "Luke", "Mark", "Matthew"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <GroupList
        items={items}
        heading="Friends"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alerts
          onClick={() => {
            setAlertVisible(false);
          }}
        >
          Hello <span>World</span> World
        </Alerts>
      )}
      <Buttons
        color="secondary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Click to Show Alert
      </Buttons>
    </div>
  );
}
export default App;
