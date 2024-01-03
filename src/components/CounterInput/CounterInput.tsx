import { FC } from 'react'
import s from './CounterInput.module.css'
import { InputValue } from './InputValue'
import { Button } from '../Button'

type CounterInputPropsType = {
	maxValue: number
	startValue: number
	onChangeStartValue: (newValue: string) => void
	onChangeMaxValue: (newValue: string) => void
	resetValue: () => void
}

export const CounterInput: FC<CounterInputPropsType> = (props) => {
	return (
		<div className={s.counterInput}>
			<InputValue
				maxValue={props.maxValue}
				startValue={props.startValue}
				onChangeStartValue={props.onChangeStartValue}
				onChangeMaxValue={props.onChangeMaxValue}
			/>
			<Button text={'set'} value={2} callback={props.resetValue} />
		</div>
	)
}
