import React, { Component, Fragment } from 'react';
import axios from 'axios';
export default class TV extends Component {
  state = {
    tv: [],
  };
  getTrending = async (mediaType) => {
    // Using fetch
    // let response = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
    // response = await response.json()
    // console.log(response.data)
    // Using axios
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
    this.setState({ [mediaType]: data.results });
  };
  componentDidMount() {
    this.getTrending('movies');
    this.getTrending('tv');
  }
  render() {
    let { tv } = this.state;
    return (
      <Fragment>
        <div className='row py-5 text-capitalize'>
          <div className='col-lg-4'>
            <div className='brdr w-25 mb-4'></div>
            <h2 className=''>
              trending
              <br />
              tv shows <br /> to watch right now
            </h2>
            <p className='secondFontColor py-2'>most watched movies by day</p>
            <div className='brdr w-100 mt-4'></div>
          </div>
          {tv.slice(0, 10).map((movie) => (
            <div key={movie.id} className='col-lg-2'>
              <div className='movie'>
                <img
                  className='w-100'
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=''
                />
                <h4 className='h6 py-3'>
                  {movie.title}
                  {movie.name}
                </h4>
                <div className='vote p-2 position-absolute'>
                  {movie.vote_average}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

