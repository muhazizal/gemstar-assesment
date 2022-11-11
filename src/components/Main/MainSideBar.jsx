import { Component } from 'react'

import CoreLogo from '../Core/CoreLogo'

export default class MainSideBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='w-[295px] fixed overflow-auto top-0 h-full'>
				<div className='bg-primary py-6 pl-6 h-[65px]'>
					<CoreLogo></CoreLogo>
				</div>
				<div className='shadow-[0_2px_2px_4px_rgba(0,0,0,0.05)]'></div>
			</div>
		)
	}
}