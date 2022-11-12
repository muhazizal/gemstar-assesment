export default function DashboardClientHeader(props) {
	const { clientsCount, title, subtitle } = props
	return (
		<div className='text-secondary mb-6'>
			<h2 className='font-bold text-xl'>{title}</h2>
			<span>{subtitle(clientsCount)}</span>
		</div>
	)
}
