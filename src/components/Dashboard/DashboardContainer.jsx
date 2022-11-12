import DashboardApproval from './Approval/DashboardApproval'
import DashboardClient from './Client/DashboardClient'
import CoreButton from 'components/Core/CoreButton'

export default function DashboardContainer() {
	const containerStyle = {
		minHeight: 'calc(100vh - 130px)',
	}
	const title = 'Hi Radhika, welcome back!'
	return (
		<div style={containerStyle} className='p-4 md:p-8 bg-[#F5F6FA]'>
			<h1 className='text-[24px] md:text-[28px] leading-7 font-bold text-secondary'>
				{title}
			</h1>
			<DashboardClient></DashboardClient>
			<DashboardApproval></DashboardApproval>
			<div className='mt-[15px]'>
				<CoreButton
					label='See all approvals here'
					classLabel='text-primary font-bold'
				></CoreButton>
			</div>
		</div>
	)
}
