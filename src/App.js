import React from 'react'
import "./App.css"
import Home from './components/Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Search from './components/Search'


const App = () => {

  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/search"> <Search /> </Route>
          </Switch>
        </Router>


      </div>
    </div>
  )
}

export default App








// https://omdbapi.com/?s=HarryPotter&apikey=74e9a1d2