import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData]= useState(null);  // use state hook
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {


        const abortCont = new AbortController();


        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok)
                {
                    throw Error('could not fetch the data from the server for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setisPending(false);
                setError(null);
            })
            .catch(err => {

                if(err.name === 'AbortError')
                {
                    console.log('Fetch Aborted'); 
                }
                setisPending(false);
                setError(err.message);
            })
            return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error}
}
 
export default useFetch;