import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CalendarPage } from './calendar/Calendar';
import { NavigationDrawer } from './drawer/Drawer';
import './index.css';
import Login from './login/Login';
import * as serviceWorker from './serviceWorker';
export const calendarPath = "/calendar";
export const loginPath = "/";

const Routing = () => {
  const [showNavigationDrawer, setShowNavigationDrawer] = useState(false);
  const openNavigationDrawer = () => {
    setShowNavigationDrawer(true);
  }
  const closeNavigationDrawer = () => {
    setShowNavigationDrawer(false);
  }

  return (
    <div>
      <NavigationDrawer 
        open={showNavigationDrawer}
        onClose={closeNavigationDrawer}
        items={[{path:loginPath, name: "Login"}]}
      />
      <Router>
        <div>
          <Route exact path={loginPath} component={Login} />
          <Route path={calendarPath} component={CalendarPage} />
        </div>
      </Router>
    </div>
  )

}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
