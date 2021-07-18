
import { useState} from "react";


function useCustomCount(){
    const [count,setCount] = useState(0);
    
    function handle(){
        setCount(count+1);
        
    }
    return(
     
            
        {
        count,
        handle
        } 
      
         
        //sending like an object
    )
}
export default useCustomCount;