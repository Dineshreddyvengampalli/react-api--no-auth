let ShowData = (props)=>{
    

    return(
        <ul>
            {props.data.map((posts)=>(
                <div>
                    <h2>{props.title}</h2>
                    <h2>{posts.id}</h2>
                    <h2>{posts.body}</h2>
                </div>
                
            ))}
        </ul>
    )

}

export default ShowData