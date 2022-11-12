import { Component } from 'react'

export default class CoreButton extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		this.props.onClick(evt)
	}

	render() {
		const { classButton, classLabel, label, prependIcon, rounded } = this.props
		const classRounded = rounded ? 'rounded-[53px] py-[6px] px-[25px]' : ''
		return (
			<button
				className={`flex flex-row justify-end items-center ${classButton} ${classRounded}`}
				onClick={this.handleClick}
			>
				{prependIcon}
				<span className={`text-sm md:text-base ${classLabel}`}>{label}</span>
			</button>
		)
	}
}
