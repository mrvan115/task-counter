import { FC } from 'react'
import s from './Counter.module.css'
import { Value } from './Value'
import Buttons from './Buttons'

type CounterPropsType = {
	value: number | string
	incBtn: string
	resetBtn: string
	increaseValue: () => void
	resetValue: () => void
	startValue: number
	maxValue: number
}

export const Counter: FC<CounterPropsType> = (props) => {
	return (
		<div className={s.counter}>
			<Value value={props.value} maxValue={props.maxValue} />
			<Buttons
				incBtn={props.incBtn}
				resetBtn={props.resetBtn}
				increaseValue={props.increaseValue}
				resetValue={props.resetValue}
				value={props.value}
				startValue={props.startValue}
				maxValue={props.maxValue}
			/>
		</div>
	)
}
