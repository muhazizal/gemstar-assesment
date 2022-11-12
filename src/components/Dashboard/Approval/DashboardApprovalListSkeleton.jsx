export default function DashboardApprovalListSkeleton() {
	const classRow = 'flex flex-auto flex-row items-center'
	return (
		<div className='py-[13px] px-4 shadow-[2px_2px_4px_rgba(0,0,0,0.05)] rounded-[5px] grid gap-4 grid-cols-12 bg-grey1 animate-pulse'>
			<div className={`col-span-2 ${classRow}`}>
				<div className='animate-pulse rounded-full bg-grey2 h-10 w-10'></div>
			</div>
			<div className={`col-span-4 ${classRow}`}>
				<div className=' animate-pulse h-2 w-10 bg-grey2 rounded'></div>
			</div>
			<div className={`col-span-3 ${classRow}`}>
				<div className=' animate-pulse h-2 w-10 bg-grey2 rounded'></div>
			</div>
			<div className={`col-span-3 ${classRow}`}>
				<div className='animate-pulse h-2 w-10 bg-grey2 rounded'></div>
			</div>
		</div>
	)
}
