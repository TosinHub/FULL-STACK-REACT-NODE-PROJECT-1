import React  from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core"; 
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";

import useStyles from  './styles'
import {createPost} from '../../actions/posts'





    
const Form = () =>{

    const [postData, setPostData] = React.useState({creator:'', title:'',message:'',tags:'', selectedFile:''})


    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
      // e.preventDefault();
        dispatch(createPost(postData))
        
    
    }

    const clear =()=>{

    }

    return (
   <Paper className={classes.paper}>
       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator:e.target.value})}/>
        <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})}/>
        <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message:e.target.value})}/>
        <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags:e.target.value})}/>
      

      <div className={classes.fileInput}>
      <Typography variant="h6">  Upload Image</Typography>
            <FileBase
                type="file"
                multiple={false}
                onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
            
            
            />
      </div>

      <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' fullWidth type="submit" >Submit</Button>
      <Button variant='contained' color='secondary' size='small' type="submit" fullWidth onClick={clear} >Clear</Button>
       </form>
   </Paper>
    )
}

export default Form;