import { Component } from 'react'
import CoreInput from './CoreInput'
import { MdSearch, MdMenu } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

export default class CoreAppBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
		}
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}

	handleSearchChange(search) {
		this.setState({ search })
	}

	render() {
		const search = this.state.search
		return (
			<header>
				<div className='bg-white px-8 py-6 flex flex-auto flex-row justify-between items-center shadow-[0_2px_2px_4px_rgba(0,0,0,0.05)]'>
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
						<button className='flex flex-row justify-end items-center'>
							<TbLogout className='text-base'></TbLogout>
							<span className='text-base font-bold ml-2.5'>Logout</span>
						</button>
						<MdMenu className='text-primary text-[25px] ml-6'></MdMenu>
					</div>
				</div>
			</header>
		)
	}
}
