import React, { Component, Fragment } from 'react';
import Movies from '../Movies/Movies';
import TV from '../Tv/Tv';
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Movies/>
        <TV/>
      </Fragment>
    );
  }
}
