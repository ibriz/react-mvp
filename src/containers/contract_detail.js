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
        <div classame="alert alert-light" role="alert">
          <span>Note: Contract status may not change after a task. Manually click 'Get Contract Status' button. Task may take more then 5 sec</span>
        </div>
        <br />
        <div className="alert alert-info" role="alert">
          <span>Contract Status: <b>{this.props.contract ? this.props.contract.status : 'DEFAULT UNKNOWN'}</b></span>
        </div>
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
