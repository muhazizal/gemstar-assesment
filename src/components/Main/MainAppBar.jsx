import { Component } from 'react'
import { MdSearch, MdMenu } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

import CoreInput from '../Core/CoreInput'
import CoreButton from '../Core/CoreButton'

export default class MainAppBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
		}
		this.handleSearchChange = this.handleSearchChange.bind(this)
		this.handleLogout = this.handleLogout.bind(this)
		this.handleToggleMenu = this.handleToggleMenu.bind(this)
	}

	handleSearchChange(search) {
		this.setState({ search })
	}

	handleLogout(evt) {
		// logout
	}

	handleToggleMenu(evt) {
		// toggle menu
	}

	render() {
		const { search } = this.state
		const appBarStyle = {
			minWidth: 'calc(100vw - 295px)',
		}
		return (
			<header
				className='bg-white px-8 py-6 flex flex-auto flex-row justify-between items-center shadow-[2px_2px_4px_rgba(0,0,0,0.05)] h-[65px] ml-[295px] fixed overflow-auto top-0'
				style={appBarStyle}
			>
				<div className='flex flex-auto flex-row items-center'>
					<MdSearch className='text-lg mr-2.5 text-[#505050]'></MdSearch>
					<CoreInput
						type='search'
						placeholder='Search anything here...'
						value={search}
						onInput={this.handleSearchChange}
					></CoreInput>
				</div>
				<div className='flex flex-auto flex-row justify-end items-center text-danger'>
					<CoreButton
						prependIcon={<TbLogout className='text-base'></TbLogout>}
						label='Logout'
						classLabel='text-base font-bold ml-2.5'
						onClick={this.handleLogout}
					></CoreButton>
					<CoreButton
						classButton='ml-6'
						prependIcon={
							<MdMenu className='text-secondary text-[25px]'></MdMenu>
						}
						onClick={this.handleToggleMenu}
					></CoreButton>
				</div>
			</header>
		)
	}
}
