import React from 'react'
import Posts from "./Posts"
import PostsForm from './PostsForm'
const App = () => {
    return (
        <div>
            <h1>These are the retrieved posts:</h1>
            <PostsForm/>
            <hr/>
            <Posts/>
        </div>
    )
}

export default App
