import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pauseContract} from '../actions/index'

class PauseContract extends Component {
  constructor(props){
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    console.log('Pause button clicked');
    this.props.pauseContract();
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-btn">
          <button onClick={this.onButtonClick} className="btn btn-secondary">Pause Contract</button>
        </span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({pauseContract}, dispatch);
}

export default connect(null, mapDispatchToProps)(PauseContract);
