import React, { Component } from 'react';
import ContractDetail from '../containers/contract_detail';
import ContractButtons from '../containers/contract_buttons';

export default class App extends Component {
  render() {
    return (
      <div>
        <ContractDetail />
        <ContractButtons />
      </div>
    );
  }
}
