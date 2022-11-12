import { Component } from 'react'

import dbsLogoSquare from '../../../assets/images/client/dbs-logo-square.png'
import proudfootLogoSquare from '../../../assets/images/client/proudfoot-logo-square.png'
import rmiLogoSquare from '../../../assets/images/client/rmi-logo-square.png'
import jAvatar from '../../../assets/images/avatar/j-avatar.png'
import lAvatar from '../../../assets/images/avatar/l-avatar.png'
import mAvatar from '../../../assets/images/avatar/m-avatar.png'
import ownerAvatarSmall from '../../../assets/images/avatar/owner-avatar-small.png'

import DashboardApprovalHeader from './DashboardApprovalHeader'
import DashboardApprovalList from './DashboardApprovalList'

export default class DashboardApproval extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Recent approvals',
			subtitle: 'You can find the recent on-going approvals here',
			approvals: [
				{
					clientLogo: dbsLogoSquare,
					approvalName:
						'DBS DEG renewal energy LinkedIn post tiles lorem ipsum dolor sit amet, consectetur adipiscing elit',
					contactAvatar: jAvatar,
					contactName: 'Jasmine',
					ownerAvatar: ownerAvatarSmall,
					ownerName: 'Radhika',
					dateIssued: 'January 23, 2022',
					status: 'In progress',
					classStatus: 'bg-yellow',
				},
				{
					clientLogo: proudfootLogoSquare,
					approvalName: 'PF website mining and metals edit',
					contactAvatar: lAvatar,
					contactName: 'Lorena',
					ownerAvatar: ownerAvatarSmall,
					ownerName: 'Radhika',
					dateIssued: 'January 23, 2022',
					status: '1st revision',
					classStatus: 'bg-orange1',
				},
				{
					clientLogo: rmiLogoSquare,
					approvalName: 'RMI January newletter EDM',
					contactAvatar: mAvatar,
					contactName: 'Mervyn',
					ownerAvatar: ownerAvatarSmall,
					ownerName: 'Radhika',
					dateIssued: 'January 23, 2022',
					status: '2nd revision',
					classStatus: 'bg-orange2',
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
				<DashboardApprovalList approvals={approvals}></DashboardApprovalList>
			</div>
		)
	}
}
