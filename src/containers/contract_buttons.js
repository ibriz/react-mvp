import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContractStatus, pauseContract, unPauseContract} from '../actions/index'

class PauseContract extends Component {
  constructor(props){
    super(props);

    this.onGetStatusClick = this.onGetStatusClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);
    this.onUnPauseClick = this.onUnPauseClick.bind(this);
  }

  onGetStatusClick(event) {
    this.props.getContractStatus();
  }

  onPauseClick(event) {
    this.props.pauseContract();
  }

  onUnPauseClick(event) {
    this.props.unPauseContract();
  }

  render() {
    return (
      <div className="btn-toolbar">
          <button onClick={this.onGetStatusClick} className="btn btn-info">Get Contract Status</button>
          <button onClick={this.onUnPauseClick} className="btn btn-success">Activate Contract</button>
          <button onClick={this.onPauseClick} className="btn btn-danger">Pause Contract</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getContractStatus, pauseContract, unPauseContract}, dispatch);
}

export default connect(null, mapDispatchToProps)(PauseContract);
