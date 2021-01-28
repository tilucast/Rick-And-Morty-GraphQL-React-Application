import React from 'react';
import {css, Global} from '@emotion/react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import rickAndMortyLogo from '../assets/rickandmortylogo.png'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Episode from './pages/Episode';
import About from './pages/About';
import CharacterPage from './pages/CharacterPage';
import Footer from './components/Footer';
import Location from './pages/Location';

export function App() {

  const mq = ["@media (max-width: 1100px)"]

  return (
    <main
      css={css`height: 100%;`}
    >
      <BrowserRouter>
        <Navbar />
        <Global 
          styles={{
            ":root": {
              "--hover": "#f08d49",
              "--text": "white",
              "--text-gray": "rgb(158, 158, 158)",
              "--background": "rgb(36, 40, 47)",
              "--darker-background": "rgba(32,35,41)",
              "--inline-background": "rgba(27,31,35,0.050980392156862744)",
              "--inline-color": "#476582",
              "--warning": "rgb(214, 61, 46)",
              "--success": "rgb(85, 204, 68)"
            },
            html: {
              fontSize: "62.5%",
              height: "100%",
              [mq[0]]: {
                fontSize: "54%"
              }
            },
            "*": {
              margin: 0,
              padding: 0
            },
            body: {
              margin: "0",
              padding: "0",
              font: "1.3rem 'Poppins', sans-serif",
              boxSizing: "border-box",
              height: "100%"
            },
            
          }}
        />

        <section
          css={css`
            display: grid;
            place-items: center;
            padding-bottom: 4rem;
            max-height: 60vh;
            background-image: url(../assets/rickandmortybackground.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          `}
        >
          <img
            css={css`
              width: 95%;
              height: 60%;

              @media (max-width: 550px) {
                height: 70%;
              }

              @media (min-width: 1450px){
                width: 120rem;
                height: 30rem;
              }
            `}
            src={rickAndMortyLogo} alt="rick and morty logo"
          />
        </section>

        <section css={css`
          padding: 5rem 0;
          position: relative;
          width: 100%;
          min-height: calc(-60px + 50vh);
          background-color: var(--background);
        `}> 
          <Switch>
            <Route path="/episode/:id">
              <Episode />
            </Route>

            <Route path="/character/:id">
              <CharacterPage />
            </Route>

            <Route path="/location/:id">
              <Location />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </section>

      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
