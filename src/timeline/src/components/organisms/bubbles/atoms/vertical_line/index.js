import styles from './style.module.css'

const { VerticalLineStyle, EvenLineStyle, OddLineStyle } = styles

/**
 * Adds a vertical line for being used between a bubble and a comment
 * @param {Object} props
 * @param {Boolean} props.isEven - used for positioning a vertical line
 * @returns 
 */
export default function VerticalLine(props)
{
	return (
		<div className={VerticalLineStyle + " disable-anim " +
			(props.isEven ? EvenLineStyle : OddLineStyle)}>
		</div>
	)
}