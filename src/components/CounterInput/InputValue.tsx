import { ChangeEvent, FC, useState } from 'react'
import s from './InputValue.module.css'

type InputValuePropsType = {
	maxValue: number
	startValue: number
	onChangeStartValue: (newValue: string) => void
	onChangeMaxValue: (newValue: string) => void
}

export const InputValue: FC<InputValuePropsType> = (props) => {
	const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeStartValue(e.currentTarget.value)
	}
	const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeMaxValue(e.currentTarget.value)
	}

	return (
		<div className={s.inputValue}>
			<div>
				<div>max value:</div>
				<input
					className={s.input}
					type='number'
					value={props.maxValue}
					onChange={onChangeMaxValueHandler}
				/>
			</div>
			<div>
				<div>start value:</div>
				<input
					className={s.input}
					type='number'
					value={props.startValue}
					onChange={onChangeStartValueHandler}
				/>
			</div>
		</div>
	)
}
