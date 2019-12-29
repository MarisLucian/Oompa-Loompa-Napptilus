import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Main from './components/MainView/Main.js';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Details from './components/Details/Details.js'



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/:oompa_id" component={Details}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
