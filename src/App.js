import NavBar from './components/NavBar'
import Counters from './components/counters'
import './App.css'

function App() {
	return (
		<>
			<NavBar />
			<main classname='container'>
				<Counters />
			</main>
		</>
	)
}

export default App
