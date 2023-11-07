import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AnasayfaMvp from "./components/AnasayfaMvp";
import SiparisFormuMvp from "./components/SiparisFormuMvp";
import { Switch, Route } from "react-router-dom";
import SiparisOnayi from "./components/SiparisOnayiMvp";



const App = () => {

  return (<div>
    <SiparisOnayi />
  </div>


  );
};
export default App;
/*

    <Switch>
      <Route path="/" exact>
        <AnasayfaMvp />
      </Route>

      <Route path="/pizza" exact>
        <SiparisFormuMvp />
      </Route>

      <Route path="*">
        <h1>ARADIĞINIZ SAYFA BULUNAMADI!!</h1>
      </Route>
    </Switch> 
    */

