import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { AddToList } from "./actions/methods";
import { useState } from "react";

const App = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="ekleme_formu">
        <input
          placeholer="Add to List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => props.AddToList(text)}>Add</button>
      </div>
      <div className="liste">
        {props.list.map((item) => (
          <div key={item.id} className={item.done ? "done" : ""}>
            {item.title}
          </div>
        ))}
      </div>
      <button className="temizle">Clear Completed Ones</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { AddToList })(App);
