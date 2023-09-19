import React, { FC } from 'react'
import s from './Counter.module.css'
import { CounterValue } from './CounterValue/CounterValue'
import { CounterButtons } from './CounterButtons/CounterButtons'

type CounterPropsType = {
	value: number
	increaseValue: () => void
	resetValue: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {
	return (
		<div className={s.counter}>
			<CounterValue value={props.value} />
			<CounterButtons
				increaseValue={props.increaseValue}
				resetValue={props.resetValue}
				value={props.value}
			/>
		</div>
	)
}
