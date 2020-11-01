import './global/config';
import React, { Component } from 'react';
import AccountsComponent from './accounts-component';
import AccountGraphComponent from './account-graph-component';
import './main-layout-component.style.css';


export default class MainLayoutComponent extends Component {
	render() {
		return (
      <div className="MainLayoutComponent">
        <AccountsComponent />
        <AccountGraphComponent accNo="0201894993002" />
			</div>
		);
	}
}
