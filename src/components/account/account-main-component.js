import '../global/config';
import React, { Component } from 'react';
import AccountGridComponent from './account-grid-component';
import AccountGraphComponent from './account-graph-component';
import './account-main.style.css';


export default class AccountMainComponent extends Component {
	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);

    this.state = {
      accNo: ''
		};
  }

	getData(val) {
		// do not forget to bind getData in constructor
		if (val !== 'accNo') {
			this.setState({ accNo: val }, () => { console.log('parent', this.state.accNo); });
		}
	}

	render() {
		return (
			<div className="account-main">
        <AccountGridComponent sendData={this.getData}/>
        <AccountGraphComponent accNo={this.state.accNo} sendData={this.getData}/>
			</div>
		);
	}
}
