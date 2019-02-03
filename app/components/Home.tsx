import React, { Component } from 'react';
// import 'Home.css';
const styles = require('./Home.css');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles} data-tid="container">
        <h2>Home</h2>
      </div>
    );
  }
}
