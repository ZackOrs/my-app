import NavBar from './components/NavBar'
import Counters from './components/counters'
import './App.css'
import { Component } from 'react'

class App extends Component {
	state = {
		counters: [
			{ id: 0, defaultValue: 0, currentValue: 0 },
			{ id: 1, defaultValue: 1, currentValue: 1 },
			{ id: 2, defaultValue: 2, currentValue: 2 },
			{ id: 3, defaultValue: 3, currentValue: 3 }
		]
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

	render() {
		return (
			<>
				<NavBar counterLength={this.state.counters.filter(c => c.currentValue > 0).length} />
				<main classname='container'>
					<Counters
						counters={this.state.counters}
						onSingleReset={this.handleSingleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onResetAll={this.handleResetAll}
					/>
				</main>
			</>
		)
	}
}

export default App
