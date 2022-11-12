export default function DashboardApprovalListHeader() {
	return (
		<div className='py-[13px] px-4 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] grid gap-3 grid-cols-12 text-secondary'>
			<div className='col-span-2'>Image</div>
			<div className='col-span-3'>Name</div>
			<div className='col-span-3'>Current price</div>
			<div className='col-span-4'>Market cap</div>
		</div>
	)
}
