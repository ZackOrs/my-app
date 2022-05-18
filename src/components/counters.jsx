import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
	state = {
		counters: [
			{ id: 0, defaultValue: 0, currentValue: 0 },
			{ id: 1, defaultValue: 1, currentValue: 1 },
			{ id: 2, defaultValue: 2, currentValue: 2 },
			{ id: 3, defaultValue: 3, currentValue: 3 }
		]
	}
	render() {
		return (
			<>
				<button onClick={() => this.handleResetAll()} className='btn btn-primary bt-sm m-2'>
					reset all
				</button>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={() => this.handleDelete(counter)}
						onReset={() => this.handleSingleReset(counter)}
						onIncrement={() => this.handleIncrement(counter)}
					>
						<h1>Counter #{counter.id}</h1>
					</Counter>
				))}
			</>
		)
	}

	handleResetAll = () => {
		const counters = this.state.counters.map(c => {
			c.currentValue = c.defaultValue
			return c
		})
		this.setState({ counters })
	}
	handleSingleReset = counter => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].currentValue = this.state.counters[index].defaultValue
		this.setState({ counters })
		// const counters = this.state.counters
		// counters[counter.id].currentValue = counters[counter.id].defaultValue
		// this.setState({ counters })
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].currentValue += 1
		this.setState({ counters })
	}
	handleDelete = counter => {
		const counters = this.state.counters.filter(c => c.id !== counter.id)
		this.setState({ counters })
	}
}

export default Counters
