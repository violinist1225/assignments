import React from "react"
import Data from "./Data"
import Piece from "./Piece"


function BlogPost(props){

    console.log(props.vampire, props.age)
    const information = Data.map((each, index) => {
        return(
            <Piece 
                title = {each.title}
                subTitle = {each.SubTitle}
                author = {each.author}
                date = {each.date}
                key = {index}
            />
        )
    })

    return(
        <div class="containerBlogs">
            {information}

        </div>
    )
}



   
    


export default BlogPost