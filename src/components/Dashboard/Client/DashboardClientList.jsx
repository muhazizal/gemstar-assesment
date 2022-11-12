import DashboardClientListItem from './DashboardClientListItem'

export default function DashboardClientList(props) {
	const { clients } = props
	const clientsEl = clients.map((client, index) => (
		<DashboardClientListItem
			key={index}
			client={client}
		></DashboardClientListItem>
	))
	return <div className='client-list'>{clientsEl}</div>
}
