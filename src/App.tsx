import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/Counter/Counter'

function App() {
	const [value, setValue] = useState<number>(0)

	const increaseValue = () => {
		value < 5 ? setValue(value + 1) : ''
	}

	const resetValue = () => {
		setValue(0)
	}

	return (
		<div className='app'>
			<Counter
				value={value}
				increaseValue={increaseValue}
				resetValue={resetValue}
			/>
		</div>
	)
}

export default App
