import React from "react";
import ReactDOM from "react-dom";

import CustomCalendar1 from "./CustomCalendar1";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import { Appbar, Button, Container } from "muicss/react";

import UserList from "./containers/user-list";

import netlifyIdentity from 'netlify-identity-widget'; // for local dev. use: https://timewiseapp.netlify.app/.netlify/identity
import Protected from './pages/Protected';
import Public from './pages/Public';

import "./App.scss";


function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
export default AuthExample;


// function App() {
//   return (
//     <div>
//       <Router>
//         <div>
//           <Appbar>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/Home">Home</Link>
//                 </li>
//               </ul>
//             </nav>
//             <UserList></UserList>
//           </Appbar>
//           {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/calendar">
//               <Calendar />
//             </Route>
//             <Route path="/home">
//               <Home />
//             </Route>
//             <Route path="/requests">
//               <Requests />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
