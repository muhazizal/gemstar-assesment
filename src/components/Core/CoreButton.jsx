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
		const { classButton, classLabel, label, prependIcon } = this.props
		return (
			<button
				className={classButton + ' flex flex-row justify-end items-center'}
				onClick={this.handleClick}
			>
				{prependIcon}
				<span className={classLabel}>{label}</span>
			</button>
		)
	}
}
