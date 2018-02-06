import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    handleChange(event){
        this.setState({inputValue: event.target.value})
    }

    formSubmit(event){
        event.preventDefault();
        console.log(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return (
        <div className="well">
          <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.formSubmit}>
            <fieldset>
              <legend>New Playlist</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Create Playlist</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        )
    }
}
