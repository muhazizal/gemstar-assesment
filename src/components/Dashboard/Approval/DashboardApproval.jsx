import { Component } from 'react'

import DashboardApprovalHeader from './DashboardApprovalHeader'

export default class DashboardApproval extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Recent approvals',
			subtitle: 'You can find the recent on-going approvals here',
			approvals: [
				{
					clientLogo: '',
					approvalName:
						'DBS DEG renewal energy LinkedIn post tiles lorem ipsum dolor sit amet, consectetur adipiscing elit',
					contactLogo: '',
					contactName: 'Jasmine',
					ownerLogo: '',
					ownerName: 'Radhika',
					dateIssued: '23/01/2022',
					status: 'In progress',
				},
				{
					clientLogo: '',
					approvalName: 'PF website mining and metals edit',
					contactLogo: '',
					contactName: 'Lorena',
					ownerLogo: '',
					ownerName: 'Radhika',
					dateIssued: '23/01/2022',
					status: '1st revision',
				},
				{
					clientLogo: '',
					approvalName: 'RMI January newletter EDM',
					contactLogo: '',
					contactName: 'Mervyn',
					ownerLogo: '',
					ownerName: 'Radhika',
					dateIssued: '23/01/2022',
					status: '2nd revision',
				},
			],
		}
	}

	render() {
		const { title, subtitle, approvals } = this.state
		return (
			<div className='mt-14'>
				<DashboardApprovalHeader
					title={title}
					subtitle={subtitle}
				></DashboardApprovalHeader>
			</div>
		)
	}
}
