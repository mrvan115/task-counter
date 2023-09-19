import React, { FC } from 'react'
import { Button } from '../../Button'
import s from './CounterButtons.module.css'

type CounterButtonsPropsType = {
	increaseValue: () => void
	resetValue: () => void
	value: number
}

export const CounterButtons: FC<CounterButtonsPropsType> = (props) => {
	return (
		<div className={s.buttons}>
			<Button
				callBack={() => {
					props.increaseValue()
				}}
				text={'inc'}
				maxValue={5}
				value={props.value}
			/>
			<Button
				callBack={() => {
					props.resetValue()
				}}
				text={'reset'}
				maxValue={0}
				value={props.value}
			/>
		</div>
	)
}
