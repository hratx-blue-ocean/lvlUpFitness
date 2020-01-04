import React, {createContext, Component } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuth: false
  };

  loggedIn =()=>{
    this.setState({isAuth: true});
  }

  loggedOut =() =>{
    this.setState({isAuth: false});
  }

  render() {
    
    return (
      <AuthContext.Provider 
      value={{...this.state ,loggedIn: this.loggedIn , loggedOut: this.loggedOut }}>
      
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// export const AppProviderConsumer = AppProviderContext.Consumer;
