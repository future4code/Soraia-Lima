import React, { useState } from 'react'
import { IconContainer, IconImage } from './styled'
import imglike from "../../image/like.png"
import imgLikePreto from "../../image/like-preenchido.jpg"
import imgdeslike from "../../image/deslike.jpg"
import imgDeslikePreto from "../../image/deslike-preenchido.png"
import iconeComentario from "../../image/comentario.png"
// import {  createPostVote } from '../../requests/requests'


export function IconeComContador(props) {
	// console.log(props)
	const [like, setLike] = useState(false)
	const [deslike, setDeslike] = useState(false)
	const [contador, setContador] = useState(0)

	let onClickLike = () => {
		if (!like) {
			setLike(!like)
			console.log("likeeeeeeeee")
			// createPostVote(props.id)
			props.createPostVote(props.id)
		} else {
			setLike(!like)
			
		}
	}
	let onClickDeslike = () => {
		if (!like) {
			setDeslike(!deslike)
			console.log("deslikiiiiii")
		} else {
			setDeslike(!deslike)
		}
	}

	let iconeLike
	if (like) {
		iconeLike = imgLikePreto
	} else {
		iconeLike = imglike
	}

	let iconeDeslike
	if (deslike) {
		iconeDeslike = imgDeslikePreto
	} else {
		iconeDeslike = imgdeslike
	}


	return <IconContainer>
		
			<IconImage alt={'Icone'} src={iconeLike} onClick={onClickLike} />
			<p>{props.valorDoContador}0</p>
			<IconImage alt={'Icone'} src={iconeDeslike} onClick={onClickDeslike} />
		
		{/* <p>0</p><img src={iconeComentario} alt={"comentarios"} /> */}
	</IconContainer>
}
