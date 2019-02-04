import React, { PureComponent } from 'react';
import { IProps } from './types';

const styles = require('./Home.css');

export default class Home extends PureComponent<IProps> {
  render() {
    return (
      <div data-tid="container">
        <h2 className={styles.homeTitle}>Home</h2>
      </div>
    );
  }
}
