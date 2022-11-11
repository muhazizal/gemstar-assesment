import CoreAppBar from './components/Core/CoreAppBar'
import CoreSideBar from './components/Core/CoreSideBar'

function App() {
	return (
		<div>
			<header className='flex flex-auto flex-row'>
				<CoreSideBar></CoreSideBar>
				<CoreAppBar></CoreAppBar>
			</header>
		</div>
	)
}

export default App
