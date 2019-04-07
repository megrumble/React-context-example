import React from "react";
//Context must be decalred with a capital "C" in order for React
//to recognize it as a component
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  //set up state with currently selected language
  state = { language: "english" };
  //callback function so other components can change the
  //currently selected language
  onLanguageChange = language => {
    this.setState({ language });
  };
  // render method with current data is how we can share the
  //current data along with the ability to change it with other components
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
