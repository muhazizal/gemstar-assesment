import DashboardApproval from './Approval/DashboardApproval'
import DashboardClient from './Client/DashboardClient'

export default function DashboardContainer() {
	const containerStyle = {
		height: 'calc(100vh - 65px)',
	}
	const title = 'Hi Radhika, welcome back!'
	return (
		<div style={containerStyle} className='p-8 bg-[#F5F6FA]'>
			<h1 className='text-[28px] leading-7 font-bold text-secondary'>
				{title}
			</h1>
			<DashboardClient></DashboardClient>
			<DashboardApproval></DashboardApproval>
		</div>
	)
}
