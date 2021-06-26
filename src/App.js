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
      nextPage: 1,
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const { results } = await response.json();
      this.setState({
        nextPage: this.state.nextPage + 1,
        loading: false,
        data: [].concat(this.state.data, results),
      });
    } catch (error) {
      this.setState({
        nextPage: 1,
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
