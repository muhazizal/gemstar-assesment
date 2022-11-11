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
		const type = this.props.type
		const value = this.props.value
		const placeholder = this.props.placeholder
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
