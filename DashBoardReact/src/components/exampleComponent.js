import react, { Component } from "react";
import "./App.css";
import cors from "cors";

class App extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {
      theme: "default",
      page: 1,
      characters: null,
      maxPage: 0,
    };
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results, maxPage: data.info.pages });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    /* We can make more than one api request here (Promise.all) */
    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results });
      })
      .catch((err) => console.log(err));
  }

  nextPage() {
    this.state.page < this.state.maxPage
      ? this.setState({ page: this.state.page + 1 })
      : this.setState({ page: 1 });
  }

  prevPage = () => {
    this.state.page > 1
      ? this.setState({ page: this.state.page - 1 })
      : this.setState({ page: this.state.maxPage });
  };
  changeTheme = () => {
    return this.state.theme === "default"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "default" });
  };

  render() {
    return (
      <>
        <div className={`theme-${this.state.theme}`}>
          <h1>{this.props.title}</h1>
          <button onClick={() => this.changeTheme()}>Dark Theme</button>
          <button onClick={() => this.nextPage()}>Next Page</button>
          <button onClick={() => this.prevPage()}>Prev</button>
          <h2>Page: {this.state.page}</h2>
          <ul>
            {this.state.characters &&
              this.state.characters.map((character) => (
                <li key={character.id}>
                  <img src={character.image} alt={character.name} />
                  <p>{character.name}</p>
                  <p>{character.species}</p>
                </li>
              ))}
          </ul>
        </div>
        ;
      </>
    );
  }
}

export default App;
