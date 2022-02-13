import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

const Defaultlayout = React.lazy(() => import("./container/DefaultLayout"));

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);
function App() {
  return (
    <BrowserRouter>
     <React.Suspense fallback={loading()}>
         <Switch>
           {/* <Route
           path="/login"
           name=""
           render={(props) => <Login {...props} />}>
           </Route> */}
           {/* <Route
           path="/forgetPassword"
           name=""
           render={(props) => <ForgetPassword {...props} />}>
           </Route> */}
         
            <Route
              path="/"
              name=""
              render={(props) => <Defaultlayout {...props} />} />
              
        </Switch>
     </React.Suspense>
  </BrowserRouter>
  );
}

export default App;
