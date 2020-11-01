import './global/config';
import React, { Component } from 'react';
import AccountListComponent from './account-list-component';
import AccountGraphComponent from './account-graph-component';
import './main-layout-component.style.css';


export default class MainLayoutComponent extends Component {
	render() {
		return (
      <div className="MainLayoutComponent">
        <AccountListComponent />
        <AccountGraphComponent accNo="0201894993002" />
			</div>
		);
	}
}
