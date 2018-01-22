import React, {Component} from 'react';
import {connect} from 'react-redux';

class ContractDetail extends Component {
  render() {
    return (
      <div className="input-group">
        <span>Contract Status: <b>{this.props.contract ? this.props.contract.status : 'DEFAULT UNKNOWN'}</b></span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract
  };
}

export default connect(mapStateToProps)(ContractDetail);
