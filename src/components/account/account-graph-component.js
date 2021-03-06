import axios from 'axios';
import React, { Component, createRef } from 'react';
import './account-graph.style.css';
import { DataSet, Network } from 'vis';
import '../global/config';

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
		// console.log(`========= ${this.state.nodes.length}`)
		if (
			this.props.accNo !== '' &&
			this.props.accNo !== null &&
			this.props.accNo !== this.state.accNo
		) {
			this.setState({ accNo: this.props.accNo }, () => {
				const url1 = `${global.config.apiURL}/getNode?accNo=${this.props.accNo}`;
				const url2 = `${global.config.apiURL}/getEdge?accNo=${this.props.accNo}`;

				console.log(url1);
				console.log(url2);

				axios.get(url1).then((response) => {
					let curr_nodes = response.data;
					let prev_nodes = [...this.state.nodes];
					let curr_prev_nodes = [...prev_nodes, ...curr_nodes];
					let uniq = {}
					let uniq_curr_prev_nodes = curr_prev_nodes.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));;
					this.setState({ nodes: uniq_curr_prev_nodes });

					axios.get(url2).then((response) => {
						let curr_edges = response.data;
						let prev_edges = [...this.state.edges];
						let curr_prev_edges = [...prev_edges, ...curr_edges];
						let uniq = {}
						let uniq_curr_prev_edges = curr_prev_edges.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));;
						this.setState({ edges: uniq_curr_prev_edges });

						// initialize network using API!
						const vis_nodes = new DataSet(this.state.nodes);
						const vis_edges = new DataSet(this.state.edges);

						const vis_data = {
							nodes: vis_nodes,
							edges: vis_edges
						};

						this.network = new Network(this.appRef.current, vis_data, this.props.visOptions);

						//find selected node accNo by id and then pass it to parent to regenerate the graph
						this.network.on( 'click', (properties) => {
							if (properties.nodes.length > 0) {
								const selectedNodeId = properties.nodes[0];
								const nodesSearchedById = this.state.nodes.filter(obj => { return obj.id === selectedNodeId });
								if (nodesSearchedById.length > 0) {
									const selectedNodeAccNo = nodesSearchedById[0].label;
									console.log('selectedNodeAccNo', selectedNodeAccNo);
									this.props.sendData(selectedNodeAccNo);
								}
							}
						});
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
			<div ref={this.appRef} className='account-graph'/>
		);
	}
}
