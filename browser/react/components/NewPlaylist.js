import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value, dirty: true })
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue);
    this.setState({ inputValue: '', dirty: false });
  }

  render() {
    let bool = false;
    if (this.state.inputValue.length > 0 && this.state.inputValue.length <= 16) {
      bool = true;
    }

    let warning = false;
    if ((this.state.dirty && !this.state.inputValue.length) || this.state.inputValue.length > 16) {
      warning = true;
    }



    return (
      <div className="well">
        <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.formSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                {
                  warning &&
                  <div className="alert alert-warning">Please enter a valid name</div>
                }
                <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={!bool}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
