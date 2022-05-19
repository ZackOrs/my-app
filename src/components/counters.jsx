import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
	render() {
		return (
			<>
				<button onClick={() => this.props.onResetAll()} className='btn btn-primary bt-sm m-2'>
					reset all
				</button>
				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={() => this.props.onDelete(counter)}
						onSingleReset={() => this.props.onSingleReset(counter)}
						onIncrement={() => this.props.onIncrement(counter)}
					>
						<h1>Counter #{counter.id}</h1>
					</Counter>
				))}
			</>
		)
	}
}

export default Counters
