export default function DashboardApprovalListItem(props) {
	const {
		clientLogo,
		approvalName,
		contactAvatar,
		contactName,
		ownerAvatar,
		ownerName,
		dateIssued,
		status,
		classStatus,
	} = props.approval

	function ItemAvatar({ avatar, name }) {
		return (
			<div className='col-span-2 flex flex-auto flex-row items-center'>
				<img
					className='max-w-[23px] max-h-[22px]'
					src={avatar}
					alt='Contact Avatar'
				/>
				<span className='ml-2'>{name}</span>
			</div>
		)
	}

	return (
		<div className='py-[13px] px-4 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] grid gap-4 grid-cols-12 text-secondary'>
			<div className='col-span-1'>
				<img src={clientLogo} alt='Client Logo' />
			</div>
			<div className='col-span-3 flex flex-auto flex-row items-center'>
				<div className='truncate font-bold'>{approvalName}</div>
			</div>
			<ItemAvatar avatar={contactAvatar} name={contactName}></ItemAvatar>
			<ItemAvatar avatar={ownerAvatar} name={ownerName}></ItemAvatar>
			<div className='col-span-2 flex flex-auto flex-row items-center'>
				{dateIssued}
			</div>
			<div className='col-span-2 flex flex-auto flex-row items-center'>
				<div
					className={`px-3 rounded-[5px] w-[120px] text-center ${classStatus}`}
				>
					{status}
				</div>
			</div>
		</div>
	)
}
