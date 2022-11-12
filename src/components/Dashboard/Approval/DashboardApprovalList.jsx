import DashboardApprovalListHeader from './DashboardApprovalListHeader'
import DashboardApprovalListItem from './DashboardApprovalListItem'

export default function DashboardApprovalList(props) {
	const { approvals } = props
	const approvalList = approvals.map((approval, index) => (
		<DashboardApprovalListItem
			key={index}
			approval={approval}
		></DashboardApprovalListItem>
	))
	return (
		<div className='mt-6'>
			<div className='mb-[13px]'>
				<DashboardApprovalListHeader></DashboardApprovalListHeader>
			</div>
			<div className='flex flex-auto flex-col gap-y-[13px]'>{approvalList}</div>
		</div>
	)
}
