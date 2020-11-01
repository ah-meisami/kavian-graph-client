import '../global/config';
import React, { Component } from 'react';
import AccountGridComponent from './account-grid-component';
import AccountGraphComponent from './account-graph-component';
import './account-main.style.css';


export default class AccountMainComponent extends Component {
	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);
  }

	getData(val) {
    // do not forget to bind getData in constructor
    console.log('parent',val);
	}

	render() {
		return (
			<div className="account-main">
        <AccountGridComponent sendData={this.getData}/>
        <AccountGraphComponent accNo="0201894993002" />
			</div>
		);
	}
}
