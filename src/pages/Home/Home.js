import React, { useEffect } from 'react';
import './Home.scss';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBar from 'components/NavBar/NavBar'
import Plog from 'components/Plog/Plog'
import CameraWhite from 'images/camera_w.svg'
import PortfolioWhite from 'images/portfolio_w.svg'
import AboutWhite from 'images/about_w.svg'
import CameraBlack from 'images/camera_b.svg'
import PortfolioBlack from 'images/portfolio_b.svg'
import AboutBlack from 'images/about_b.svg'
import Editor from 'pages/Editor/Editor'
import { GET_BODY_LOADING } from 'gql/local/global'
import { withApollo } from 'react-apollo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App({ client }) {
  const theme = useTheme();
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

  useEffect(() => {
    const { loadState } = client.readQuery({ query: GET_BODY_LOADING })
    const hide = eval(loadState.hideLoading)
    const loader = document.querySelector('.loader')
    hide(loader)
  })

  const generateParticleBg = () => {
    const boxes = Array(15).fill('')
    const sprites = boxes.map((item, index) => <div className="particle" key={'sprite-' + index}></div>)
    return <div className="particle-container">{sprites}</div>
  }

  return (
    <div className="App">
      <div className="layout">
        <Router>
          <NavBar buttonList={buttonList}/>
          <br/>
          <br/>
          <div className="main-content">
            <Switch>
              <Route path="/portfolio">
              </Route>
              <Route path="/about">
              </Route>
              <Route path="/edit">
                <Editor/>
              </Route>
              <Route path="/">
                <Plog/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <div>{generateParticleBg()}</div>
    </div>
  );
}

export default withApollo(App);
