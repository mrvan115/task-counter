import React, { FC } from 'react'
import s from './CounterValue.module.css'

type CounterValuePropsType = {
	value: number
}

export const CounterValue: FC<CounterValuePropsType> = (props) => {
	return (
		<div className={props.value === 5 ? s.error : s.value}>{props.value}</div>
	)
}
