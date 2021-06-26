import React from "react";

import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/grid.css";

//Componets
import Header from "./components/Header";
import ListCharacter from "./components/ListCharacter";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const { results } = await response.json();
      this.setState({
        loading: false,
        data: results,
      });
    } catch (error) {
      this.setState({
        loading: true,
        data: [],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />

        {this.state.loading && <Loader></Loader>}

        <ListCharacter list={this.state.data} />

        {!this.state.loading && (
          <button
            onClick={this.fetchCharacters}
            className="btn btn-primary get__more"
          >
            Get More Character
          </button>
        )}
      </div>
    );
  }
}

export default App;
