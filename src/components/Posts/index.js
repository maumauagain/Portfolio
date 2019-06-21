import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <a href={props.Link}><img src={props.Image} alt={props.Alt} /></a>
            <h4>{props.title}</h4>
            <p>{props.Subject}</p>
        </div>
    )
}

export default Post;