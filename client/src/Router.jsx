import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import smartTable from './pages/smartTable'

export default function MoviesRouter() {
    return (
        <Router>
        <div>
            <Switch>
<Route path='/' component={Home}/>
<Route path='/smart' component={smartTable}/>


            </Switch>


        </div>
        </Router>
    )
}
