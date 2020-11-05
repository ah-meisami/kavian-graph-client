import axios from 'axios';
import React, { Component } from 'react';
import './account-option.style.css';
import '../global/config';
import {JSONEditor} from 'react-json-editor-viewer';

import {localOption} from './account-option-data'; // for offline testing

export default class AccountOptionComponent extends Component {
	constructor(props) {
		super(props);
		this.onJsonChange = this.onJsonChange.bind(this);

		this.state = {
			option: []
		}
	}

	onJsonChange(key, value, parent, newOption) {
		const url1 = `${global.config.apiURL}/postOption`;

		axios.post(url1, newOption)
			.then(response => {
				this.setState({ option : newOption }, () => this.props.sendOptions(this.state.option))
			})
	}

	componentDidMount() {
		const url1 = `${global.config.apiURL}/getOption`;

		axios.get(url1)
			.then(response => {
				const remoteOption = response.data;
				if(Object.keys(remoteOption).length === 1) //means there is no option in remote thus loads local remote as default
					this.setState({ option : localOption }, () => this.props.sendOptions(this.state.option))
				else
					this.setState({ option : remoteOption }, () => this.props.sendOptions(this.state.option))
			})
	}

	render() {
		return (
			<div className="account-option">
				<JSONEditor data={this.state.option} onChange={this.onJsonChange} />
			</div>
		);
	}
}
