import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [newIsPending, setNewIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e)=>{

        e.preventDefault();
        const blog={title, body, author}
        setNewIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then( () => {
            setNewIsPending(false)
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog </h2>
            <form onSubmit={handleSubmit} >
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value = {title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value = {body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input
                type="text"
                required
                value = {author}
                onChange={(e)=> setAuthor(e.target.value)}
                />
                {newIsPending===false?<button>Add Blog</button>:<button disabled>Adding Blog...</button>
                }
                
            </form>
        </div>
    );
}
 
export default Create;