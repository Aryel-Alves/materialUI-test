import React from 'react';
import './App.css';

import AutoCompleteInput from "./components/auto-complete-input"

function App() {
  return (
    <div className="App">
      HELOO
      <AutoCompleteInput optionsList={formato.options} />
    </div>
  );
}

const possibleFilters = [ 
    {name: "tipo", options:[{name:"ADP", amount:5}, {name:"ET", amount:5}]},
    {name: "idioma", options:[{name:"BR", amount:8}, {name:"OT", amount:9}, {name:"EN", amount:1}]},
    {name: "formato", options:[{name:"XLS", amount:7}, {name:"DOC", amount:5}, {name:"DOCX", amount:2}, {name:"PDF", amount:2}, {name:"DGN", amount:2}]},
    {name: "disciplina", options:[{name:"TELECOMUNICAÇÕES", amount:8}, {name:"ESTRUTURA", amount:3}, {name:"ELETRICA", amount:3}, {name:"COORDENACAO", amount:4} ]},
]

const formato = {
  name: "formato", 
  options: [ 
    {name:"XLS", amount:7}, 
    {name:"DOC", amount:5}, 
    {name:"DOCX", amount:2}, 
    {name:"PDF", amount:2}, 
    {name:"DGN", amount:2}
  ].sort((a, b) => a.name.localeCompare(b.name))
}
export default App;
