import { FC } from 'react'
import s from './Value.module.css'

type ValuePropsType = {
	value: number | string
	maxValue: number
}

export const Value: FC<ValuePropsType> = (props) => {
	return (
		<div
			className={
				props.value === props.maxValue || props.value === 'Incorrect value!'
					? s.error
					: s.value
			}
		>
			{props.value}
		</div>
	)
}
