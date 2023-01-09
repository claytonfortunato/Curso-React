import React, { useState } from "react";
import "./App.css";

import Modal from "./components/Modal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState();

  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? <Modal /> : null}
    </div>
  );
}

export default App;
