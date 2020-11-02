import axios from 'axios';
import React, { Component } from 'react';
import './account-grid.style.css';
// import { accounts } from './account-grid.data' // for offline testing
import '../global/config';

export default class AccountGridComponent extends Component {
	constructor(props) {
		super(props);

    this.state = {
      accounts: []
    };
  }

  componentDidMount() {
    const url1 = `http://127.0.0.1:30/getData`;

    axios.get(url1)
      .then(response => {
        const accounts = response.data;
        this.setState({ accounts });
      })

    /*
    // for offline testing
    this.setState({ accounts });
    */
  }

  handleClick = (selectedNodeAccNo)=>{
    console.log('selectedNodeAccNo', selectedNodeAccNo);
    this.props.sendData(selectedNodeAccNo);
  }

	render() {
		return (
			<div className="account-grid">
				<table border="1">
					<thead>
						<tr>
							<th>{global.config.i18n.rowNo.fa}</th>
							<th>{global.config.i18n.accountNo.fa}</th>
							<th>{global.config.i18n.numOfRelatedAccounts.fa}</th>
						</tr>
          </thead>
          <tbody>
            {this.state.accounts.map((account, index) => (
              <tr key={account.ACCNO}  onClick={()=>this.handleClick(account.ACCNO)}>
                <td>{index + 1}</td>
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
