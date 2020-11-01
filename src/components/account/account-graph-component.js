import axios from 'axios';
import React, { Component, createRef } from 'react';
import './account-graph.style.css';
import { DataSet, Network } from 'vis';

// import { nodes } from './account-graph.data.nodes' // for offline testing
// import { edges } from './account-graph.data.edges' // for offline testing

export default class AccountGraphComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accNo: '',
			nodes: [],
			edges: []
		};

		this.network = {};
		this.appRef = createRef();
	}

	componentDidUpdate() {
		if (
			this.props.accNo !== '' &&
			this.props.accNo !== null &&
			this.props.accNo !== this.state.accNo
		) {
			this.setState({ accNo: this.props.accNo }, () => {
				const url1 = `http://127.0.0.1:30/getNode?accNo=${this.props.accNo}`;
				const url2 = `http://127.0.0.1:30/getEdge?accNo=${this.props.accNo}`;

				console.log(url1);
				console.log(url2);

				axios.get(url1).then((response) => {
					const nodes = response.data;
					this.setState({ nodes });

					axios.get(url2).then((response) => {
						const edges = response.data;
						this.setState({ edges });

						// initialize network using API!
						const vis_nodes = new DataSet(this.state.nodes);
						const vis_edges = new DataSet(this.state.edges);

						const vis_data = {
							nodes: vis_nodes,
							edges: vis_edges
						};

						const vis_options = {};

						this.network = new Network(this.appRef.current, vis_data, vis_options);
					});
				});

				/*
      // for offline testing
      const vis_nodes = new DataSet(nodes);
      const vis_edges = new DataSet(edges);

      const vis_data = {
        nodes: vis_nodes,
        edges: vis_edges
      };

      const vis_options = {};

      this.network = new Network(this.appRef.current, vis_data, vis_options);
      */
			});
		}
	}

	render() {
		return (
			<div className="account-graph">
				{this.props.accNo}
				<div
					ref={this.appRef}
					style={{
						width: '800px',
						height: '700px',
						border: '1px solid black',
						align: 'center'
					}}
				/>
			</div>
		);
	}
}
