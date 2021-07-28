import React from "react";
import "./styles.css";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" />
        <button>Add</button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div key={item.id} className={item.tamamlandi ? "done" : ""}>
            {item.baslik}
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

export default connect(mapStateToProps)(App);
