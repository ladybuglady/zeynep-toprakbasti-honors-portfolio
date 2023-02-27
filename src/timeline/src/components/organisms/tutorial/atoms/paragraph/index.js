import ParagraphStyle from './style.module.css'
import React, { Component }  from 'react';

/**
 * Adds a div with left padding
 * @param {Object} props 
 * @param {Object} props.children
 * @returns 
 */
export default function Paragraph(props)
{
	return <div className={ParagraphStyle}>
		{props.children}
	</div>
}