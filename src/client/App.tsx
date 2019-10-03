import * as React from 'react'
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import UsefulLinks from './Components/UsefulLinks';
import Sessions from './Components/Sessions';
import Register from './Components/Register';


export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/useful' component={UsefulLinks} />
                <Route exact path='/sessions' component={Sessions} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </Router>
    );
}

export default App;