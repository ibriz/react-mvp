import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContractStatus} from '../actions/index'

class ContractDetail extends Component {
  constructor(props){
    super(props);
    this.props.getContractStatus();
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getContractStatus}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ContractDetail);
