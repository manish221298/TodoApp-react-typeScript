import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form"

const App= () => {

  return (
    <div className="App">
      <div className="container">
          <div className="row main">
              <div className="col-sm"></div>
              <div className="col-sm ">
                <div className="container todo-border">
                  <Form />
                </div>
              </div>
              <div className="col-sm"></div>
          </div>
      </div>
    </div>
  );
};

export default App;
