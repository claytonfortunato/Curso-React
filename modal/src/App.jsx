import React, { useState } from "react";
import "./App.css";

import Modal from "./components/Modal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState();

  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            magnam ipsum, nesciunt voluptatem pariatur odit harum labore ipsam
            laborum accusamus animi eligendi in asperiores necessitatibus
            dolores dignissimos saepe dolore adipisci. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quos tempora nulla, maiores ex,
            perferendis quam placeat laboriosam quaerat rerum, architecto magni
            quod unde quae recusandae voluptatibus ea molestias facilis
            obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima odio nostrum maxime voluptatum praesentium eligendi hic
            reiciendis eum officia corporis? Esse accusamus enim quo corporis
            porro blanditiis, sit aperiam eum?
          </p>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
