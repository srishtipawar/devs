import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {submit,first,last} from './Action';
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
    const text = useSelector((state)=>state.counter)
    const firstname = useSelector((state)=>state.firststate)
    const lastname = useSelector((state)=>state.laststate)
    const dispatch = useDispatch();


    return(
        <div>
            <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="FirstName" onChange={(e)=>{
                    dispatch(first(e.target.value));
                }} />
                <TextField id="standard-basic" label="LastName" onChange={(e)=>{
                    dispatch(last(e.target.value));
                 } }/>
    </form>
    <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick = {dispatch(submit)}
      >
        Submit
      </Button>
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Display2;