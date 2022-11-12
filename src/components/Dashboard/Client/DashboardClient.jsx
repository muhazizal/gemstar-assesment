import { Component } from 'react'

import dbsLogo from '../../../assets/images/client/dbs-logo.png'
import proudfootLogo from '../../../assets/images/client/proudfoot-logo.png'
import rmiLogo from '../../../assets/images/client/rmi-logo.png'
import { DashboardClientHeader } from './DashboardClientHeader'

import DashboardClientList from './DashboardClientList'

export default class DashboardClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Your client list',
			subtitle: (clientsCount) =>
				`You currently servicing ${clientsCount} clients`,
			clients: [
				{
					name: 'DBS Bank',
					description:
						'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.',
					logo: dbsLogo,
					classLogo: 'max-w-[100px] h-[47px]',
				},
				{
					name: 'Proudfoot',
					description:
						'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.',
					logo: proudfootLogo,
					classLogo: 'max-w-[70px] h-[47px]',
				},
				{
					name: 'RMI',
					description:
						'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.',
					logo: rmiLogo,
					classLogo: 'max-w-[170px] h-[47px]',
				},
			],
		}
	}

	render() {
		const { title, subtitle, clients } = this.state
		return (
			<div className='mt-11'>
				<DashboardClientHeader
					title={title}
					subtitle={subtitle}
					clientsCount={clients.length}
				></DashboardClientHeader>
				<DashboardClientList clients={clients}></DashboardClientList>
			</div>
		)
	}
}
