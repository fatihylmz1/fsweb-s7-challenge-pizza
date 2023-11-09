import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AnasayfaMvp from "./components/AnasayfaMvp";
import SiparisFormuMvp from "./components/SiparisFormuMvp";
import { Switch, Route } from "react-router-dom";
import SiparisOnayi from "./components/SiparisOnayiMvp";
import AnasayfaAdv from "./components/ADV-Tasarım/AnasayfaAdv";
import SiparisFormuAdv from "./components/ADV-Tasarım/SiparisFormuAdv";




const App = () => {

  return (<div>
    <SiparisFormuAdv />
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
      <Route path="/siparisonay" exact>
        <SiparisOnayi />
      </Route>


      <Route path="*">
        <h1>ARADIĞINIZ SAYFA BULUNAMADI!!</h1>
      </Route>


    </Switch>
    */

