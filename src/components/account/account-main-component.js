import '../global/config';
import React, { Component } from 'react';
import AccountGridComponent from './account-grid-component';
import AccountGraphComponent from './account-graph-component';
import AccountOptionComponent from './account-option-component';
import './account-main.style.css';


export default class AccountMainComponent extends Component {
	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);
		this.getOptions = this.getOptions.bind(this);

    this.state = {
			accNo: '',
			visOptions: {},
		};
  }

	getData(val) {
		// do not forget to bind getData in constructor
		if (val !== 'accNo') {
			this.setState({ accNo: val }, () => { console.log('parent', this.state.accNo); });
		}
	}

	getOptions(visOptions) {
		// do not forget to bind getData in constructor
		this.setState({ visOptions});
	}

	render() {
		return (
			<div className="account-main">
				<div>
					<AccountGridComponent sendData={this.getData} />
				</div>
				<div>
					<AccountGraphComponent accNo={this.state.accNo} sendData={this.getData} visOptions={this.state.visOptions} />
				</div>
				<div>
					<AccountOptionComponent sendOptions={this.getOptions}/>
				</div>
			</div>
		);
	}
}
