import React, { useState } from 'react'
import { IconContainer, IconImage } from './styled'
import imglike from "../../image/like.png"
import imgLikePreto from "../../image/like-preenchido.jpg"
import imgdeslike from "../../image/deslike.jpg"
import imgDeslikePreto from "../../image/deslike-preenchido.png"
import iconeComentario from "../../image/comentario.png"
// import {  createPostVote } from '../../requests/requests'


export const ContadorVotoPost = (props)  => {
	// console.log(props)
	const [like, setLike] = useState(false)
	const [deslike, setDeslike] = useState(false)
	const [contador, setContador] = useState(0)

	let onClickLike = () => {
		if(props.userVote === null){
			props.createPostVote()	
			console.log("clicouuuuuuuuuuuuuuuuuuuuuu")
		}else if(props.userVote === 1){
			props.changePostVote()
		}

		// if (!like) {
		// 	setLike(!like)
		// 	console.log("likeeeeeeeee")
		// 	props.createPostVote()
		// 	props.userVote
		// 	// props.createCommentVote()
		// 	// console.log(props.id)
		// } else {
		// 	setLike(!like)
			

		// }
	}
	let onClickDeslike = () => {
		// if (!like) {
		// 	setDeslike(!deslike)
		// 	console.log("deslikiiiiii")
		
		// } else {
		// 	setDeslike(!deslike)
		// }
	
		if(props.userVote === 1){
			props.changePostVote()
		}
	}

	let iconeLike
	if (props.userVote === null) {
		// iconeLike = imglike
		iconeLike = <span>🤍</span>
	} else {
		// iconeLike = imgLikePreto
		iconeLike = <span>🧡</span>
	}

	let iconeDeslike
	if (props.userVote === null) {
		iconeDeslike = imgDeslikePreto
	} else {
		iconeDeslike = imgdeslike
	}

	return <IconContainer>

		{/* <IconImage src={iconeLike} onClick={onClickLike} /> */}
		<span onClick={onClickLike}>{iconeLike}</span>
		<p>{props.voto ? props.voto : 0}</p>
		<span onClick={onClickDeslike}></span>
		{/* <IconImage alt={'Icone'} src={imgdeslike} onClick={onClickDeslike} /> */}
	</IconContainer>
}
