import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CadastroCliente from "./pages/CadastroCliente";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro-cliente" component={CadastroCliente} />
      </Switch>
    </Router>
  );
}

export default App;
