import React from "react";

import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/grid.css";

//Componets
import Header from "./components/Header";
import ListCharacter from "./components/ListCharacter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const { results } = await response.json();
    this.setState({
      data: results,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ListCharacter list={this.state.data} />
      </div>
    );
  }
}

export default App;
