import { Component } from 'react'

import API from '../../../plugins/axios'

import DashboardApprovalHeader from './DashboardApprovalHeader'
import DashboardApprovalList from './DashboardApprovalList'

export default class DashboardApproval extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Recent approvals',
			subtitle: 'You can find the recent on-going approvals here',
			approvals: [],
			isLoadingGetMarkets: false,
		}
		this.handleLoadingGetMarkets = this.handleLoadingGetMarkets.bind(this)
		this.handleUpdateApprovals = this.handleUpdateApprovals.bind(this)
		this.getMarkets = this.getMarkets.bind(this)
	}

	handleLoadingGetMarkets(isLoadingGetMarkets) {
		this.setState({ isLoadingGetMarkets })
	}

	handleUpdateApprovals(payload) {
		const { approvals } = this.state
		if (approvals && approvals.length === 0) {
			this.setState({ approvals: payload })
		} else {
			const result = []
			payload.forEach((data) => {
				const isDataExist = approvals.find(
					(approval) => approval.id === data.id
				)
				if (!isDataExist) {
					result.push(data)
				}
			})
			this.setState({ approvals: [...approvals, ...result] })
		}
	}

	async getMarkets() {
		if (this.state.isLoadingGetMarkets) return
		this.handleLoadingGetMarkets(true)
		try {
			const response = await API.get('/', {
				params: {
					vs_currency: 'idr',
					per_page: 10,
				},
			})
			const { data } = response
			if (data) {
				this.handleUpdateApprovals(data)
			}
			this.handleLoadingGetMarkets(false)
		} catch (error) {
			this.handleLoadingGetMarkets(false)
		}
	}

	async componentDidMount() {
		await this.getMarkets()
	}

	render() {
		const { title, subtitle, approvals, isLoadingGetMarkets } = this.state
		return (
			<div className='mt-6 md:mt-14'>
				<DashboardApprovalHeader
					title={title}
					subtitle={subtitle}
				></DashboardApprovalHeader>
				<DashboardApprovalList
					approvals={approvals}
					isLoadingGetMarkets={isLoadingGetMarkets}
				></DashboardApprovalList>
			</div>
		)
	}
}
