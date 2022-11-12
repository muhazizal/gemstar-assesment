import { Component } from 'react'

import { MdOutlineDashboard } from 'react-icons/md'
import { TbFileSearch } from 'react-icons/tb'
import { BiUserPin, BiCog } from 'react-icons/bi'

import CoreLogo from 'components/Core/CoreLogo'
import MainNavigation from './MainNavigation'
import MainProfile from './MainProfile'

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
	}

	render() {
		const { navigationList, myAccountList } = this.state
		return (
			<div className='w-[295px] fixed overflow-auto top-0 h-full shadow-[2px_2px_4px_rgba(0,0,0,0.05)]'>
				<div className='bg-primary py-6 pl-6 h-[65px]'>
					<CoreLogo></CoreLogo>
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
		)
	}
}
