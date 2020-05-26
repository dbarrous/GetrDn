import React,{useState} from 'react'


const Posts = () => {

    //Fetch Posts and add to State
    const [posts,setPosts] = useState(null);
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data=> setPosts(data))
    .catch(err=> console.log(err));

   
    return (
        <div>
            {posts === null ? null : (posts.map(post=>{
                return(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            }))}
        </div>
    )
}

export default Posts
