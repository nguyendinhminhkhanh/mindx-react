import React, { Component } from "react";
import Header from "./Component/Header";
import ColorPicker from "./Component/ColorPicker";
import "./App.css";
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header-box">
          <Header title="Random quote machine title" />
        </div>
        <div className="ColorPicker-box">
          <ColorPicker colors={colors} />
        </div>
      </div>
    );
  }
}

export default App;
