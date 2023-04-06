import React from "react";

import Title from "./components/Title";
import Comics from "./components/Comics";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";
import Spinner from "./components/Spinner";

const apiUrl = "https://xkcd.com";
const apiUrlFormat = "info.0.json";

class App extends React.Component {
  state = {
    title: undefined,
    url: undefined,
    currentComicsNumber: undefined,
    minComicsNumber: 1,
    maxComicsNumber: 2759,
    error: undefined,
    loading: true
  }

  getRandomComics = async () => {
    const random = Math.floor(Math.random() * 2759) + 1 ;
    const api_call = await fetch(`${apiUrl}/${random}/${apiUrlFormat}`);
    const data = await api_call.json();

    this.setState({
      title: data.title,
      url: data.img,
      currentComicsNumber: data.num,
      error: undefined,
      loading: false
    });
  }

  getPreviousComics = async () => {
    const previousNumber = this.state.currentComicsNumber - 1;

    if (previousNumber < this.state.minComicsNumber) {
      this.setState({
        title: undefined,
        url: undefined,
        error: "You reached the very first comics...",
        currentComicsNumber: 0,
        loading: false
      });
    } else {
      const api_call = await fetch(`${apiUrl}/${previousNumber}/${apiUrlFormat}`);
    const data = await api_call.json();

    this.setState({
      title: data.title,
      url: data.img,
      currentComicsNumber: data.num,
      error: undefined,
      loading: false
    });
    }
  }

  getNextComics = async () => {
    const nextNumber = this.state.currentComicsNumber + 1;

    if (nextNumber > this.state.maxComicsNumber) {
      this.setState({
        title: undefined,
        url: undefined,
        error: "There is no more comics...",
        currentComicsNumber: this.state.maxComicsNumber + 1,
        loading: false
      });
    } else {
      const api_call = await fetch(`${apiUrl}/${nextNumber}/${apiUrlFormat}`);
      const data = await api_call.json();

      this.setState({
        title: data.title,
        url: data.img,
        currentComicsNumber: data.num,
        error: undefined,
        loading: false
      });
    }
  }

  getFirstComics = async () => {
    const api_call = await fetch(`${apiUrl}/${this.state.minComicsNumber}/${apiUrlFormat}`);
    const data = await api_call.json();

    this.setState({
      title: data.title,
      url: data.img,
      currentComicsNumber: data.num,
      error: undefined
    });
  }

  getLastComics = async () => {
    const api_call = await fetch(`${apiUrl}/${this.state.maxComicsNumber}/${apiUrlFormat}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      title: data.title,
      url: data.img,
      currentComicsNumber: data.num,
      error: undefined,
      loading: false
    });
  }

  getComicsById = async (e) => {
    e.preventDefault();
    const comicsID = e.target.elements.comicsID.value;
    const api_call = await fetch(`${apiUrl}/${comicsID}/${apiUrlFormat}`);
    const data = await api_call.json();

    this.setState({
      title: data.title,
      url: data.img,
      currentComicsNumber: data.num,
      error: undefined,
      loading: false
    });
  }

  render() {
    return (
      <div className="main__container">
        <Title/>
        <Navigation 
          getRandomComics={this.getRandomComics}
          getPreviousComics={this.getPreviousComics}
          getNextComics={this.getNextComics}
          getFirstComics={this.getFirstComics}
          getLastComics={this.getLastComics}
        />
        <div>
          {this.state.loading ? <div><h4 className="loading">Loading</h4> <Spinner/></div> : ''}
        </div>
        <Comics 
          title = {this.state.title}
          url = {this.state.url}
          error = {this.state.error}
        />
        <Searchbar getComicsById={this.getComicsById}/>
      </div>
    )
  }
}


export default App;
