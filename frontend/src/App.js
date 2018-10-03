import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import PaginaPrincipal from './components/paginaPrincipal';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Noticia from './components/Noticia';
import AgregarNoticia from './components/AgregarNoticia';
import NoticiaUnica from './components/NoticiaUnica';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Cv from './components/Cv';
import CvUnico from  './components/CvUnico';
const history = createHistory();







if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <Provider store = { store }>
        <Router history={history} >
            <div>
              <Navbar />

<div className="container">
<Switch>
              <Route exact path="/" component={ PaginaPrincipal } />

                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/paginaPrincipal" component={ PaginaPrincipal } />
                  <PrivateRoute exact path="/crearcv" component={ContactPage  } />
                  <PrivateRoute exact path="/cv" component={Cv  } />
                  <PrivateRoute exact path="/cvu/:id" component={CvUnico  } />
                  <Route exact path="/noticiaUnica/:id" component={NoticiaUnica  } />
                  <Route component={NoMatch} />
</Switch>
              </div>
<Footer />
            </div>

          </Router>
        </Provider>
    );
  }
}

const NoMatch = ({ location }) => (
  <div className="noencotrdo">
<h1>404</h1>
    <h3>
      Pagina no encontrada, pero podes adoptar a Gino que esta buscando dueño
    </h3>
    <img src={require('./imagenes/perro.jpg')}  />
  </div>
);
export default App;
