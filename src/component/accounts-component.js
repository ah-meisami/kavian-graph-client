// import axios from 'axios';
import React, { Component } from 'react';
import './accounts-component.style.css';

import { accounts } from './accounts-component.data' // for offline testing

export default class AccountsComponent extends Component {
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

	render() {
		return (
			<div className="AccountsComponent">
				<table border="1">
					<thead>
						<tr>
							<th>شماره حساب</th>
							<th>تعداد نود وابسته</th>
						</tr>
          </thead>
          <tbody>
            {this.state.accounts.map(account => (
              <tr key={account.ACCNO}>
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
