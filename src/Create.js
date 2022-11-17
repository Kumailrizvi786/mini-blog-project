import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        const blog ={title,body,author};
        setisPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setisPending(false);
            //history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                type="text" 
                required
                value={ title }
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={ body }
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select value={author}  onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="kumail">kumail</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog please wait......</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p> { author }</p> */}
            </form>
        </div>
     );
}
 
export default Create;
