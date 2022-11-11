import { Outlet } from 'react-router-dom'

import MainAppBar from '../components/Main/MainAppBar'
import MainSideBar from '../components/Main/MainSideBar'

export default function MainLayout() {
	return (
		<>
			<MainAppBar></MainAppBar>
			<MainSideBar></MainSideBar>
			<main className='ml-[295px]'>
				<Outlet></Outlet>
			</main>
			<footer></footer>
		</>
	)
}
