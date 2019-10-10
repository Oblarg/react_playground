import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';
import Login from './login/Login';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CalendarPage } from './calendar/Calendar';
import { NavPane } from './navpane/NavPane';
import { MapPage } from './map/Map';
import { CameraCapture } from './camera/Camera';
import './index.css';


export const calendarPath = "/calendar";
export const loginPath = "/";
export const mapPath = "/map";
export const camPath = "/camera";

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
      <div>
        <Button
          onClick={openNavigationDrawer}
        >
          Open nav pane
        </Button>
      </div>
      <Router>
        <NavPane
          open={showNavigationDrawer}
          onClose={closeNavigationDrawer}
          items={[{ path: loginPath, name: 'Login' },
          { path: calendarPath, name: 'Calendar' },
          { path: mapPath, name: 'Map'},
          { path: camPath, name: 'Camera'}
        ]}
        />
        <div>
          <Route exact path={loginPath} component={Login} />
          <Route path={calendarPath} component={CalendarPage} />
          <Route path={mapPath} component={MapPage}/>
          <Route path={camPath} component={CameraCapture}/>
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
