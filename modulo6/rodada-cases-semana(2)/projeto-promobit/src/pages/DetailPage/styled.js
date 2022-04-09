import styled from 'styled-components'

export const Conatiner = styled.div`
overflow-x: hidden; 
`

export const ContainerInfoMovei = styled.div`
background-color: #6518ae;
height: 55vh;
}`

export const ContainerDetail = styled.div`
width: 95%;
margin-left: 5vw;
display: flex;
img{
    width: 20vw;
    height: 57vh;
    border-radius: 0.5em;
    margin-top:4vh;
}
section{
    width: 70%;
    color: white;
    margin-left: 3vw;
    margin-top:4vh;
    display: flex;
    flex-direction: column;
    h3{
        margin-top: 1vh;
        margin-bottom: 1vh;
    }
    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        p{
            margin: 0.3em;
        }
    }
}
`
export const ContainerCredits = styled.div`
display: flex;
margin-top: 2vh;
flex-wrap: wrap;
div{
    width: 15vw;
    margin-bottom: 1vh;
    h4{
        font-size: 1.2em;
    }
}
`

export const ContainerVote = styled.div`
display: flex;
align-items: center;
h3{
    margin-right: 0.3vw;
}
span{
    color: red;
    font-weight: bold;
    margin-top: 0.3vh;
}`

export const ContainerInfoActor = styled.div`
margin-top: 12vh;
margin-left: 5vw;
width: 90%;
h2{
    margin-bottom: 2vh;
}
`

export const ContainerActors = styled.div`
display: flex;
width: 100%;
overflow-x: scroll;
`

export const InfoActor = styled.div`
margin: 1em;
border-radius: 5px;
box-shadow: 5px 5px 5px gray;
padding: 0.5em;
img{
    width: 12vw;
    height: 28vh;
    border-radius: 5px;
}
:hover{
    top:-4px;
    box-shadow:0 4px 4px #999;
    transition: all .2s ease-in-out;
}
p{
    color: gray;
    margin-top: 1vh;
}
`

export const ContainerTrailer = styled.div`
margin-top: 4vh;
margin-left: 4vw;
div{
    text-align: center;
    margin-top: 4vh;
    iframe{
        width: 85vw;
        height: 90vh;
        border-radius: 10px;
    }
}`

export const ContainerInfoRecommendations = styled.div`
margin-top: 4vh;
margin-left: 4vw;
margin-bottom: 4vh;
`


export const ContainerRecommendations = styled.div`
display: flex;
width: 90%;
overflow-x: scroll;
margin-top: 1vh;
margin-left: 4vw;
`

export const MapRecommendations = styled.div`
div{
    padding: 0.5em;
    img{
        width: 15vw;
        height: 30vh;
        border-radius: 5px;
        cursor: pointer;
}
:hover{
        opacity: 0.7;
    }
}
h3{
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    margin-top: 0.6em;
    margin-left: 0.5vw;
    margin-bottom: 1vh;;
    width: 80%;

}
p{
    color: gray;
    font-size: 0.7em;
    margin-bottom: 1.5vh;
    margin-left: 0.5vw;
}`

export const ContainerButton = styled.div`
text-align: center;
margin-top: 7vh;
margin-bottom: 4vh;
button{
    width: 7vw;
    height: 5vh;
    font-size: 1.3em;
    border-radius: 5px;
    background-color: #6518ae;
    border: none;
    color: white;
    :hover{
        border: 1px solid #6518ae;
        color: #6518ae;
        background-color: white;
    }
}
`