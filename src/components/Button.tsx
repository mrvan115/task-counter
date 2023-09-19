import React, { FC } from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
	text: string
	callBack: () => void
	value: number
	maxValue?: number
}

export const Button: FC<ButtonPropsType> = (props) => {
	return (
		<button
			onClick={props.callBack}
			className={s.btnDefault}
			disabled={props.value === props.maxValue}
		>
			{props.text}
		</button>
	)
}
