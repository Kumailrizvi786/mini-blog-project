import { useState } from "react";

const Home = () => {

    const handleClick = (e) =>{
        
    }



    // const handleCickAgain = (name) => 
    // {
    //     console.log('Hello '+ name);
    // }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Here</button>
            {/* <button onClick={() => {
                handleCickAgain('kumail');
            }}>Click Here Again</button> */}
        </div>
      );
}
 
export default Home;