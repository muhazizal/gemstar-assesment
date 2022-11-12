import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import MainAppBar from 'components/Main/MainAppBar'
import MainSideBar from 'components/Main/MainSideBar'
import MainFooter from 'components/Main/MainFooter'

export default function MainLayout() {
	const [visibleDrawer, setVisibleDrawer] = useState(false)
	const handleToggleDrawer = (evt) => {
		setVisibleDrawer(!visibleDrawer)
	}
	return (
		<>
			<MainAppBar onToggleDrawer={handleToggleDrawer}></MainAppBar>
			<MainSideBar visibleDrawer={visibleDrawer}></MainSideBar>
			<main className='lg:ml-[295px] mt-[65px]'>
				<Outlet></Outlet>
			</main>
			<MainFooter></MainFooter>
		</>
	)
}
