// import axios from 'axios';
import React, { Component } from 'react';
import './account-list-component.style.css';
import { accounts } from './account-list-component.data' // for offline testing
import './global/config';

export default class AccountListComponent extends Component {
	constructor(props) {
		super(props);

    this.state = {
      accounts: []
    };
  }

  componentDidMount() {
    // const url1 = `http://127.0.0.1:30/getData`;
    // // const url2 = `http://dummy.restapiexample.com/api/v1/employees`;

    // axios.get(url1)
    //   .then(response => {
    //     const accounts = response.data.rows;
    //     this.setState({ accounts });
    //   })

    this.setState({ accounts }); // for offline testing
  }

  handleClick = (accNo)=>{
    console.log(accNo)
  }

	render() {
		return (
			<div className="AccountListComponent">
				<table border="1">
					<thead>
						<tr>
							<th>{global.config.i18n.accountNo.fa}</th>
							<th>{global.config.i18n.numOfRelatedAccounts.fa}</th>
						</tr>
          </thead>
          <tbody>
            {this.state.accounts.map(account => (
              <tr key={account.ACCNO}  onClick={()=>this.handleClick(account.ACCNO)}>
                <td>{account.ACCNO}</td>
                <td>{account.NO}</td>
              </tr>
            ))}
          </tbody>
				</table>
			</div>
		);
	}
}
