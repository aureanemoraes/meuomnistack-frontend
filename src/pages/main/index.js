import React, { Component } from 'react';
import api from '../../services/api';
import "./style.css";
import logo from '../../assets/logo.svg';

export default class Main extends Component {
  state = {
    newBox: '',
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/create-box', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`); // redirecionando para esta url
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt=""></img>
          <input 
            placeholder="Criar um box"
            value = {this.state.newBox}
            onChange = {this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
