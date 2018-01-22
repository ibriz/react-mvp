import React, { Component } from 'react';
import ContractDetail from '../containers/contract_detail';
import PauseContract from '../containers/pause_contract';

export default class App extends Component {
  render() {
    return (
      <div>
        <ContractDetail />
        <PauseContract />
      </div>
    );
  }
}
