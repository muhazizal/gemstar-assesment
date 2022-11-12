import { Outlet } from 'react-router-dom'

import MainAppBar from 'components/Main/MainAppBar'
import MainSideBar from 'components/Main/MainSideBar'
import MainFooter from 'components/Main/MainFooter'

export default function MainLayout() {
	return (
		<>
			<MainAppBar></MainAppBar>
			<MainSideBar></MainSideBar>
			<main className='ml-[295px] mt-[65px]'>
				<Outlet></Outlet>
			</main>
			<MainFooter></MainFooter>
		</>
	)
}
