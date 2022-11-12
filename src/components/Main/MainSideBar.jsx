import { Component } from 'react'

import { MdOutlineDashboard } from 'react-icons/md'
import { TbFileSearch } from 'react-icons/tb'
import { BiUserPin, BiCog } from 'react-icons/bi'
import { TbLogout } from 'react-icons/tb'

import imgLogo from '../../assets/images/logo.png'

import MainNavigation from './Navigation/MainNavigation'
import MainProfile from './MainProfile'
import CoreButton from '../Core/CoreButton'

export default class MainSideBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			navigationList: [
				{ label: 'Dashboard', icon: <MdOutlineDashboard></MdOutlineDashboard> },
				{ label: 'Approvals', icon: <TbFileSearch></TbFileSearch> },
			],
			myAccountList: [
				{ label: 'My clients', icon: <BiUserPin></BiUserPin> },
				{ label: 'Edit profiles', icon: <BiCog></BiCog> },
			],
		}
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout(evt) {
		// logout
	}

	render() {
		const { navigationList, myAccountList } = this.state
		const { visibleDrawer } = this.props
		return (
			<div>
				{visibleDrawer ? (
					<div className='transition-all w-[295px] fixed overflow-auto top-0 h-full shadow-[2px_2px_4px_rgba(0,0,0,0.05)] block lg:hidden z-10 bg-white'>
						<div className='bg-primary py-6 pl-6 h-[65px]'>
							<img
								className='max-w-[210px]'
								src={imgLogo}
								alt='Logo MANNING & Co.'
							></img>
						</div>
						<div className='pl-7 pt-7'>
							<MainProfile></MainProfile>
							<div className='text-danger mt-3 lg:hidden'>
								<CoreButton
									prependIcon={<TbLogout className='text-base'></TbLogout>}
									label='Logout'
									classLabel='text-base font-bold ml-2.5'
									onClick={this.handleLogout}
								></CoreButton>
							</div>
							<hr className='my-[30px] mr-7 text-[#DCDCDC]' />
							<MainNavigation
								label='navigation'
								list={navigationList}
							></MainNavigation>
							<hr className='mt-11 mb-[30px] mr-7 text-[#DCDCDC]' />
							<MainNavigation
								label='my account'
								list={myAccountList}
							></MainNavigation>
						</div>
					</div>
				) : (
					''
				)}
				<div className='w-[295px] fixed overflow-auto top-0 h-full shadow-[2px_2px_4px_rgba(0,0,0,0.05)] hidden lg:block'>
					<div className='bg-primary py-6 pl-6 h-[65px]'>
						<img
							className='max-w-[210px]'
							src={imgLogo}
							alt='Logo MANNING & Co.'
						></img>
					</div>
					<div className='pl-7 pt-14'>
						<MainProfile></MainProfile>
						<hr className='my-[30px] mr-7 text-[#DCDCDC]' />
						<MainNavigation
							label='navigation'
							list={navigationList}
						></MainNavigation>
						<hr className='mt-11 mb-[30px] mr-7 text-[#DCDCDC]' />
						<MainNavigation
							label='my account'
							list={myAccountList}
						></MainNavigation>
					</div>
				</div>
			</div>
		)
	}
}
