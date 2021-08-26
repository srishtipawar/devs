import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {first,last} from './Action';
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Display2(){
    const classes = useStyles();
  
    
    const firstname = useSelector((state)=>state.counter)
    const lastname = useSelector((state)=>state.counter)
   
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [lastx,setLastx] = useState("");

    return(
        <div>
            <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="FirstName" value = {name} onChange={(e)=>{
                  e.preventDefault();
                    setName(e.target.value);
                }} />
                <TextField id="standard-basic" label="LastName" value = {lastx} onChange={(e)=>{
                  e.preventDefault();
                    setLastx(e.target.value);
                 } }/>
    </form>
    <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick = {()=>{
          dispatch(first(name))
          dispatch(last(lastx))
          setName("")
          setLastx("")
        }
      }
      >
        Submit
      </Button>
            </div>
            <div>
               <h1> {firstname} {lastname}</h1>
            </div>
        </div>
    )
}

export default Display2;