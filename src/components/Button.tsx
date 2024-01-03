import { FC } from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
	text: string
	callback: () => void
	value: number | string
	lockValue?: number
}

export const Button: FC<ButtonPropsType> = (props) => {
	return (
		<button
			className={props.lockValue !== props.value ? s.button : s.disable}
			onClick={props.callback}
			disabled={props.lockValue === props.value}
		>
			{props.text}
		</button>
	)
}
