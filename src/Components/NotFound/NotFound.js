import React, { Component, Fragment } from 'react';
import Styles from './notfound.module.css'

export default class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <section className='notFound vh-100 d-flex align-items-center justify-content-center'>
         <h2 className={`text-center ${Styles.bigFont}`}>404 page</h2>
        </section>
      </Fragment>
    );
  }
}
