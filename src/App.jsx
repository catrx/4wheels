import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {UserRoutes} from "./router/user_routes";

function App() {
  return (
      <BrowserRouter>
        <UserRoutes/>
      </BrowserRouter>
  );
}

export default App;
