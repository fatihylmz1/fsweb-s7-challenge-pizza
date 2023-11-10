import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SiparisOnayi from "./components/SiparisOnayi";
import AnasayfaAdv from "./components/ADV-Tasarım/AnasayfaAdv";
import SiparisFormuAdv from "./components/ADV-Tasarım/SiparisFormuAdv";




const App = () => {



  return (<div>
    <Switch>
      <Route path="/" exact>
        <AnasayfaAdv />
      </Route>

      <Route path="/pizza" exact>
        <SiparisFormuAdv />
      </Route>
      <Route path="/siparisonay" exact>
        <SiparisOnayi />
      </Route>


      <Route path="*">
        <h1>ARADIĞINIZ SAYFA BULUNAMADI!!</h1>
      </Route>


    </Switch>
  </div>


  );
};
export default App;


