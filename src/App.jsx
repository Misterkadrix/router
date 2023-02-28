import {  Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { useState } from "react"


// components.
import { Connection } from "./components/connection/connection"
import { Home } from "./components/home/home";
import { Myaccount } from "./components/myaccount/myaccount";

function App() {

  // creation de nos useState
  let [email, setEmail] = useState('asd');
  let [password, setPassword] = useState('');


  // creation de nos routes..
  // route dans un route => l enfant du route..
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route
          path="/connection"
          // ici on peut passer des parametres dans le componens meme et receptionner avec un props
          element={<Connection
            mail={setEmail}
            mdp={setPassword}
          />}
        />

        <Route
          path="/myaccount"
          element={<Myaccount
            mail={email}
            mdp={password}
          />}
        />

      </Route>
    ));


  return (
    // obligatoire de faire appel a RouterProvider pour faire appel a nos routes.
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
