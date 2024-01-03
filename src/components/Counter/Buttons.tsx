import { FC } from 'react'
import s from './Buttons.module.css'
import { Button } from '../Button'

type ButtonsPropsType = {
	incBtn: string
	resetBtn: string
	increaseValue: () => void
	resetValue: () => void
	value: number | string
	startValue: number
	maxValue: number
}

export const Buttons: FC<ButtonsPropsType> = (props) => {
	return (
		<div className={s.buttons}>
			<Button
				text={props.incBtn}
				callback={props.increaseValue}
				value={props.value}
				lockValue={props.maxValue}
			/>
			<Button
				text={props.resetBtn}
				callback={props.resetValue}
				value={props.value}
				lockValue={props.startValue}
			/>
		</div>
	)
}

export default Buttons
