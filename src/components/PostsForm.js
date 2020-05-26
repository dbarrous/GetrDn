import React,{useState} from 'react'

const PostsForm = () => {

    const [state,setState] = useState({title:'',body:''});
    
    return (
        <div>
            <h2>Post Form</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
               
                fetch("http://jsonplaceholder.typicode.com/posts", {
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(state)
                })
                .then(res=>res.json())
                .then(data=> console.log(data))
                .then(setState({title:'',body:''}))
                .catch(err=>console.log(err))
            }}>
                <div>
                    <label>Title: </label>
                    <br/>
                    <input type="text" name="title" value={state.title} onChange={e=>setState({...state, [e.target.name]:e.target.value})}/>
                </div>
                <div>
                    <label>Body: </label>
                    <br/>
                    <textarea name="body" value={state.body} onChange={e=>setState({...state, [e.target.name]:e.target.value})} />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostsForm
