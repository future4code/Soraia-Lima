import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

function FeedPage (){
    useProtectedPage()
    return(
        <div>
            <h1>Feeeeeddddd</h1>
        </div>
    )
}
export default FeedPage