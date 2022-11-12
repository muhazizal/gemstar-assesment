import DashboardApprovalListHeader from './DashboardApprovalListHeader'
import DashboardApprovalListItem from './DashboardApprovalListItem'
import DashboardApprovalListSkeleton from './DashboardApprovalListSkeleton'

export default function DashboardApprovalList(props) {
	const { approvals, isLoadingGetMarkets } = props
	const skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const approvalListEl = approvals.map((approval, index) => (
		<DashboardApprovalListItem
			key={index}
			approval={approval}
		></DashboardApprovalListItem>
	))
	const approvalListSkeletonEl = skeletonNumber.map((skeleton) => (
		<DashboardApprovalListSkeleton
			key={skeleton}
		></DashboardApprovalListSkeleton>
	))
	return (
		<div className='mt-6'>
			<div className='mb-[13px]'>
				<DashboardApprovalListHeader></DashboardApprovalListHeader>
			</div>
			{isLoadingGetMarkets ? (
				<div className='flex flex-auto flex-col gap-y-[13px]'>
					{approvalListSkeletonEl}
				</div>
			) : (
				<div className='flex flex-auto flex-col gap-y-[13px]'>
					{approvalListEl}
				</div>
			)}
		</div>
	)
}
