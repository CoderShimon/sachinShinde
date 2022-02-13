import React,{Component,Suspense} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import ScrollToTop from './ScrollToTop'

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import routes from "../routes";
import "./DefaultLayout.scss";


class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    
    render() 
    
    { 
      
      
        return ( 
          
          
          
        <div className="app">
          
         
              <div className="w-100">  
               <Header/>
               <ScrollToTop />
                <div className="app-body">
                  <main className="main">
                      <Switch>
                          {routes.map((route, idx) => {
                            return route.component ? (
                              <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => <route.component {...props} />}
                              />
                            ) : null;
                          })}
                          <Redirect from="/" to="/" />
                        </Switch>
                  </main>    
                </div>
                <Footer/>
                
            </div>
            
          </div>
         
          
         );
    }
}
 
export default DefaultLayout;