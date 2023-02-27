import React from 'react';
import style from './style.module.css'
const { TitleStyle, TimelineStyle, BubblesStyle, AnimatedStyle } = style

/**
 * A text used as a title for the application
 * @param {Object} props 
 * @param {Boolean} props.isAnimated - animates title when it is mounted
 * @returns 
 */
export default function Title(props)
{
	return (<div><div className={"print " + TitleStyle + " " + (props.className || "") +
					(props.isAnimated ? AnimatedStyle : "")}>
		<h1 className={TimelineStyle} >Timeline</h1>
		<span className={BubblesStyle}>Bubbles</span>
	</div></div>)
}