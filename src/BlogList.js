import { Link } from "react-router-dom";

const  BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (  
        <div className="blogs-list">
            <h2>{ title }</h2> 
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                   <Link to={`/BlogDetail/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author} </p>
                   </Link>
                </div>
            ))}
        </div>
    );
}
export default BlogList;