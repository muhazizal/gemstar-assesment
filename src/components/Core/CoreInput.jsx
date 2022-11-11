import React from 'react'

export default class CoreInput extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.onInput(e.target.value)
	}

	render() {
		const { type, value, placeholder } = this.props
		return (
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={this.handleChange}
			></input>
		)
	}
}
