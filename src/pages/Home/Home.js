import React, { useEffect, useState } from 'react';
import './Home.scss';
import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import Plog from 'components/Plog/Plog'
import CameraWhite from 'images/camera_w.svg'
import PortfolioWhite from 'images/portfolio_w.svg'
import AboutWhite from 'images/about_w.svg'
import CameraBlack from 'images/camera_b.svg'
import PortfolioBlack from 'images/portfolio_b.svg'
import AboutBlack from 'images/about_b.svg'
import Editor from 'pages/Editor/Editor'
import SideBar from 'components/SideBar/SideBar'
import { GET_BODY_LOADING } from 'gql/local/global'
import { withApollo } from 'react-apollo';
import { authCheck } from 'utils'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App({ client }) {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const buttonList = [
    {
      name: 'Plog',
      img_w: CameraWhite,
      img_b: CameraBlack,
      link: '/',
    },
    {
      name: 'Portfolio',
      img_w: PortfolioWhite,
      img_b: PortfolioBlack,
      link: '/portfolio',
    },
    {
      name: 'About Me',
      img_w: AboutWhite,
      img_b: AboutBlack,
      link: '/about',
    },
  ]

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const init = async () => {
      const res = await authCheck()
      setAuth(res)
    }
    init()
  }, [])

  return (
    <div className="App">
      <div className="layout">
        <Router>
          <div className="main-content">
            <Switch>
              <Route path="/portfolio">
              </Route>
              <Route path="/about">
              </Route>
              <Route path="/edit">
                { auth ? <Editor auth={auth}/> : null}
              </Route>
              <Route path="/">
                <SideBar text="Portfolio" isLeftSide/>
                <SideBar text="Contact"/>
                <Plog/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default withApollo(App);
