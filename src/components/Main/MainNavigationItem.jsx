import { Component } from 'react'

export default class MainNavigationItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { icon, label } = this.props
		return (
			<li className='text-secondary flex flex-auto flex-row items-center cursor-pointer w-fit'>
				<span className='mr-3'>{icon}</span>
				<span className='font-bold'>{label}</span>
			</li>
		)
	}
}
