import React, { Component } from "react";


export const AuthContext = React.createContext();

export default class AuthContextProvider extends Component {
  this.state = {
    isAuth: false
  };
  
  render() {
    return (
	  <AuthContext.Provider value = {{...this.state}}>
      {this.props.children}
	  </AuthContext.Provider>
    );
  }
}

// export const AppProviderConsumer = AppProviderContext.Consumer;
