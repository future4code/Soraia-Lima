import React from 'react'
import { IconContainer ,IconImage } from './styled'


export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>0</p>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconContainer>
}
