import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useCreatePostMutation} from "../../store/postsApi/postsApi";
import Grid from 'rsuite/Grid';

import EditPost from "../../components/EditPost/EditPost";


const CreatePost = () => {
    const [createPost] = useCreatePostMutation();
    const navigate = useNavigate();


    const createPostHandler = async (postData) => {
        const requestData = await createPost({...postData}).unwrap();
        console.log(requestData)
        navigate('/')
    }


    return (
        <Grid>
            <EditPost
                onSubmitHandler={createPostHandler}
            />

        </Grid>
    );
};

export default CreatePost;
