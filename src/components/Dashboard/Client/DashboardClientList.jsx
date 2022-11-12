import DashboardClientListItem from './DashboardClientListItem'

export default function DashboardClientList(props) {
	const { clients } = props
	const clientsEl = clients.map((client, index) => (
		<DashboardClientListItem
			key={index}
			client={client}
		></DashboardClientListItem>
	))
	return <div className='flex flex-row gap-[15px]'>{clientsEl}</div>
}
