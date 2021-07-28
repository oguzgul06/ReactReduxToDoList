import React, { useState } from "react";
import "./styles.css";


export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" />
        <button>Add</button>
      </div>
      <div className="liste">
        {liste.map(item => (
          <div className={item.tamamlandi ? "done" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button className="temizle">Clear Completed Ones</button>
    </div>
  );
}
