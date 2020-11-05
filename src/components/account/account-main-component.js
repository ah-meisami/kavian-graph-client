import '../global/config';
import React, { Component } from 'react';
import AccountGridComponent from './account-grid-component';
import AccountGraphComponent from './account-graph-component';
import AccountOptionComponent from './account-option-component';
import './account-main.style.css';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default class AccountMainComponent extends Component {
	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);
		this.getOptions = this.getOptions.bind(this);

    this.state = {
			accNo: '',
			visOptions: {},
			isPaneOpen: false,
			isPaneOpenLeft: false,
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
			<div>
				<button onClick={() => this.setState({ isPaneOpen: true })}>
					گرید
				</button>
				<div style={{ marginTop: "32px" }}>
					<button onClick={() => this.setState({ isPaneOpenLeft: true })}>
						تنظیمات
					</button>
				</div>
				<AccountGraphComponent accNo={this.state.accNo} sendData={this.getData} visOptions={this.state.visOptions} />

				<SlidingPane
					className="some-custom-class"
					overlayClassName="some-custom-overlay-class"
					isOpen={this.state.isPaneOpen}
					title="گرید"
					subtitle="لطفا پس از جستجو یک سطر را انتخاب کنید"
					onRequestClose={() => { this.setState({ isPaneOpen: false }); }}
				>
					<AccountGridComponent sendData={this.getData} />
				</SlidingPane>

				<SlidingPane
					closeIcon={<div>خروج از تنظیمات</div>}
					isOpen={this.state.isPaneOpenLeft}
					title="تنظیمات"
					from="left"
					width="500px"
					onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
				>
					<AccountOptionComponent sendOptions={this.getOptions}/>
				</SlidingPane>
			</div>
	  );
	}
}
