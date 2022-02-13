import React from "react";

import Home from './Views/Home/Home'
import Contact from './Views/Contact/ContactUS'
import Portfolio from './Views/Portfolio/Portfolio'
import About from './Views/About/About'
import Classes from './Views/Classes/Classes'


















const routes = [
    { path: "/",exact: true,  name: "Home", component: Home},
    { path: "/Portfolio",  name: "Portfolio", component: Portfolio},
    { path: "/About",  name: "About", component: About},
    { path: "/Contact",  name: "Contact", component: Contact},
    { path: "/Classes",  name: "Classes", component: Classes},





  ];
  export default routes;