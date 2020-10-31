import axios from 'axios';
import React, { Component } from 'react';
import './account-graph-component.css';

export default class AccountGraphComponent extends Component {
	constructor(props) {
		super(props);

    this.state = {
      nodes: [],
      edges: []
    };
  }

  componentDidMount() {
    const url1 = `http://127.0.0.1:30/getNode?accNo=${this.props.accNo}`;
    const url2 = `http://127.0.0.1:30/getEdge?accNo=${this.props.accNo}`;

    console.log(url1);
    console.log(url2);

    axios.get(url1)
      .then(response => {
        const nodes = response.data.rows;
        this.setState({ nodes });
      })

    axios.get(url2)
      .then(response => {
        const edges = response.data.rows;
        this.setState({ edges });
      })
  }

	render() {
		return (
      <div className="AccountGraphComponent">
        {this.props.accNo}
			</div>
		);
	}
}
