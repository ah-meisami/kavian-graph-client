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
      accNo: "0200194051004"
    };
  }

	getData(val) {
    // do not forget to bind getData in constructor
		console.log('parent', val);


		this.setState({accNo: val},() => { console.log('salam', this.state.accNo); });
	}

	render() {
		return (
			<div className="account-main">
        <AccountGridComponent sendData={this.getData}/>
        <AccountGraphComponent accNo={this.state.accNo} />
			</div>
		);
	}
}
