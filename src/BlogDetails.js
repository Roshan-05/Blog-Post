import useFetch from "./useFetch";
import {useParams} from 'react-router-dom'
import {useHistory} from "react-router-dom"



const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)

    const handleDelete = (e)=>{
        fetch("http://localhost:8000/blogs/"+id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/')
        })

    }

    return (  
        <div className="blog-details">
            {error && <div><h2>{error}</h2></div>}
            {isPending && <div><h2>Loading...</h2></div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}
 
export default BlogDetails;