import React, { Component } from 'react';
import './styles.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <h2>Home</h2>
      </div>
    );
  }
}
