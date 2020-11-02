import React, { Component } from 'react';
import './account-option.style.css';
import '../global/config';
import ReactJson from 'react-json-view';

import { vis_options } from './account-option-data'; // for offline testing

export default class AccountOptionComponent extends Component {
	constructor(props) {
		super(props);

    this.props.sendOptions(vis_options);
	}

	render() {
		return (
			<div className="account-option">
				<ReactJson src={vis_options} theme='pop' iconStyle='circle' displayDataTypes={false} displayObjectSize={false} />
			</div>
		);
	}
}
