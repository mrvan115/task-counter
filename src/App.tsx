import React, { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { CounterInput } from './components/CounterInput/CounterInput'

const App = () => {
	type stateCounter = {
		incBtn: string
		resetBtn: string
		startValue: number
		maxValue: number
	}

	const stateCounter: stateCounter = {
		incBtn: 'inc',
		resetBtn: 'reset',
		startValue: 0,
		maxValue: 5
	}

	const [startValue, setStartValue] = useState<number>(0)
	const [maxValue, setMaxValue] = useState<number>(10)
	const [value, setValue] = useState<number | string>(startValue)

	const err = 'enter values and press ‘set’'

	const increaseValue = () => {
		value < maxValue ? setValue(+value + 1) : value
	}
	const resetValue = () => {
		startValue > maxValue || startValue < 0
			? setValue('Incorrect value!')
			: setValue(startValue)
	}

	const onChangeSetValue = () => {
		setValue(err)
	}

	const onChangeStartValue = (newValue: string) => {
		setStartValue(+newValue)
		onChangeSetValue()
	}
	const onChangeMaxValue = (newValue: string) => {
		setMaxValue(+newValue)
		onChangeSetValue()
	}

	return (
		<div>
			<Counter
				value={value}
				incBtn={stateCounter.incBtn}
				resetBtn={stateCounter.resetBtn}
				increaseValue={increaseValue}
				resetValue={resetValue}
				startValue={startValue}
				maxValue={maxValue}
			/>
			<CounterInput
				maxValue={maxValue}
				startValue={startValue}
				onChangeStartValue={onChangeStartValue}
				onChangeMaxValue={onChangeMaxValue}
				resetValue={resetValue}
			/>
		</div>
	)
}

export default App
