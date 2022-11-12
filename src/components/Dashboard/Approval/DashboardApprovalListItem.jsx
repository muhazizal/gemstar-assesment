export default function DashboardApprovalListItem(props) {
	const { image, name, current_price, market_cap } = props.approval
	const classRow = 'flex flex-auto flex-row items-center'

	return (
		<div className='py-[13px] px-4 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] grid gap-4 grid-cols-12 text-secondary'>
			<div className={`col-span-2 ${classRow}`}>
				<img className='max-w-[25%]' src={image} alt={`${name} Asset`} />
			</div>
			<div className={`col-span-4 ${classRow}`}>
				<div className='truncate font-bold'>{name}</div>
			</div>
			<div className={`col-span-3 ${classRow}`}>{current_price}</div>
			<div className={`col-span-3 ${classRow}`}>{market_cap}</div>
		</div>
	)
}
