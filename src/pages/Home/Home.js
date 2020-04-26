import React from 'react';
import './Home.scss';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBar from 'components/NavBar/NavBar'
import Profile from 'components/Profile/Profile'
import Experience from 'components/Experience/Experience'
import FAB from 'components/FAB/FAB'
import Skills from 'components/Skills/Skills'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const buttonList = [
    {
      name: 'Home',
      char: 'ホーム',
      img: null,
      link: '/',
    },
    {
      name: 'Experience',
      char: '仕事の経験',
      img: null,
      link: '/exp',
    },
    {
      name: 'Skills',
      char: 'スキル',
      img: null,
      link: '/skills',
    },
    {
      name: 'Resume',
      char: '履歴書',
      img: null,
      link: '/resume',
    },
    {
      name: 'Contact',
      char: '個人情報',
      img: null,
      link: '/contact',
    },
  ]

  return (
    <div className="App">
      <div className="layout">
        <Router>
          {isMobile ? <FAB buttonList={buttonList}/> : <NavBar buttonList={buttonList}/>}
          <br/>
          <Switch>
            <Route path="/skills">
              <Skills/>
            </Route>
            <Route path="/exp">
              <Experience/>
            </Route>
            <Route path="/">
              <Profile/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
