import React, {createContext, Component } from "react";
import { getSessionCookie } from "./components/Cookies";

export const AuthContext = createContext(getSessionCookie());

export default class AuthContextProvider extends Component {
  state = {
    isAuth: false,
    uid:''
  };

  componentDidMount(){
    this.setState(getSessionCookie())

  }

  loggedIn =(uid)=>{
    this.setState({isAuth: false,
      uid:uid});
  }

  loggedOut =() =>{
    this.setState({isAuth: false});
  }

  render() {
    console.log("I am context from AuthContext", this.context)
    
    return (
      <AuthContext.Provider 
      value={{...this.state ,loggedIn: this.loggedIn , loggedOut: this.loggedOut }}>
      
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// export const AppProviderConsumer = AppProviderContext.Consumer;
