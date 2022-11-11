import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import DashboardPages from './pages/DashboardPages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <DashboardPages></DashboardPages>,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
