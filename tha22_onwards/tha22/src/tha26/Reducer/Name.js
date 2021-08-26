


const myname=(state="", action)=>{
    switch(action.type){
        case "first": return state = action.firststate;
            
        case "last": return state = action.laststate;
         

        
        default:  return state;
           

    }
    
}

export default myname;