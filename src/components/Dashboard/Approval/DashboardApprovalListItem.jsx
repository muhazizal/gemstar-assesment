export default function DashboardApprovalListItem(props) {
	const { image, name, current_price, market_cap } = props.approval
	const classRow = 'flex flex-auto flex-row items-center'

	const formatNumberToRupiah = (number) => {
		let rupiah = ''
		let real = number.toString().split('.')[0]
		let decimal = number.toString().split('.')[1]
		real = real.toString().split('').reverse().join('')
		for (let i = 0; i < real.length; i++) {
			if (i % 3 === 0) {
				rupiah += real.substr(i, 3) + '.'
			}
		}
		return (
			'Rp ' +
			rupiah
				.split('', rupiah.length - 1)
				.reverse()
				.join('') +
			(decimal ? `,${decimal}` : '')
		)
	}

	return (
		<div className='py-[13px] px-4 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] grid gap-3 md:gap-4 grid-cols-12 text-secondary text-sm md:text-base'>
			<div className={`col-span-2 ${classRow}`}>
				<img
					className='max-w-[50%] md:max-w-[25%]'
					src={image}
					alt={`${name} Asset`}
				/>
			</div>
			<div className={`col-span-3 ${classRow}`}>
				<div className='truncate font-bold'>{name}</div>
			</div>
			<div className={`col-span-3 break-all md:break-normal ${classRow}`}>
				{formatNumberToRupiah(current_price)}
			</div>
			<div className={`col-span-4 break-all md:break-normal ${classRow}`}>
				{formatNumberToRupiah(market_cap)}
			</div>
		</div>
	)
}
