import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
	render() {
		const { onResetAll, onSingleReset, counters, onDelete, onIncrement } = this.props
		return (
			<>
				<button onClick={() => onResetAll()} className='btn btn-primary bt-sm m-2'>
					reset all
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={() => onDelete(counter)}
						onSingleReset={() => onSingleReset(counter)}
						onIncrement={() => onIncrement(counter)}
					>
						<h1>Counter #{counter.id}</h1>
					</Counter>
				))}
			</>
		)
	}
}

export default Counters
