import React, {createContext, Component } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuth: false
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// export const AppProviderConsumer = AppProviderContext.Consumer;
