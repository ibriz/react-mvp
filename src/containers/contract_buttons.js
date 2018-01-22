import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContractStatus, pauseContract} from '../actions/index'

class PauseContract extends Component {
  constructor(props){
    super(props);

    this.onGetStatusClick = this.onGetStatusClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);
  }

  onGetStatusClick(event) {
    this.props.getContractStatus();
  }

  onPauseClick(event) {
    this.props.pauseContract();
  }

  render() {
    return (
      <div className="btn-toolbar">
          <button onClick={this.onGetStatusClick} className="btn btn-info">Get Contract Status</button>
          <button onClick={this.onPauseClick} className="btn btn-warning">Pause Contract</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getContractStatus, pauseContract}, dispatch);
}

export default connect(null, mapDispatchToProps)(PauseContract);
