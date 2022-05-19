import React, { Component } from 'react'

class Counter extends Component {
	state = {
		// 	value: this.props.counter.value,
		tags: ['tag1', 'tag2', 'tag3']
	}

	renderTags = () => {
		if (this.state.tags.length === 0) return <p>There are no tags</p>
		return (
			<ul>
				{this.state.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		)
	}

	render() {
		return (
			<>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>
					increment Val
				</button>
				<button onClick={() => this.props.onSingleReset(this.props.counter)} Reset className='btn btn-warning btn-sm m-2'>
					reset Val
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter)} className='btn btn-danger btn-sm m-2'>
					delete
				</button>
				{this.state.tags.length === 0 && 'please create a tag'}
				{this.renderTags()}
			</>
		)
	}

	// handleIncrement = product => {
	// 	this.setState({ value: this.state.value + product.increment })
	// }

	// handleReset = () => {
	// 	this.setState({ currentValue: this.props.counter.defaultValue })
	// }

	getBadgeClasses = () => {
		let classes = 'badge m-2 bg-'
		classes += this.props.counter.currentValue === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount = () => {
		const { currentValue } = this.props.counter
		return currentValue === 0 ? 'Zero' : currentValue
	}
}

export default Counter
