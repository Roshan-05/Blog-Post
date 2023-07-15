import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>OOPs</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to HomePage...</Link>
        </div>
    );
}
 
export default NotFound;