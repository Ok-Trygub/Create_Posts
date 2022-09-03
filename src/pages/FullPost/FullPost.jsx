import React from 'react';
import './FullPost.scss';
import {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {Button, List, Modal, ButtonToolbar} from 'rsuite';
import {
    useGetPostByIdQuery,
    useGetPostCommentsQuery,
    useDeletePostMutation,
    useEditPostMutation
} from '../../store/postsApi/postsApi';
import EditPost from "../../components/EditPost/EditPost";
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';


const FullPost = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data, isLoading} = useGetPostByIdQuery(id);
    const {data: comments} = useGetPostCommentsQuery(id);
    const [editPost] = useEditPostMutation(id);
    const [deletePost] = useDeletePostMutation();


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    if (isLoading) return <h3>Loading ...</h3>;


    const editPostHandler = (postData) => {
        const newData = {...data}

        newData.title = postData.title
        newData.body = postData.body

        editPost(newData)
    }


    const deletePostHandler = () => {
        deletePost(id);
        navigate('/');
    }

    return (
        <Grid>
            <Row>
                <Col xs={24} md={10}>
                    <h4 className='fullPostTitle'>
                        {data.title}
                    </h4>
                    <p>
                        {data.body}
                    </p>

                    <div className='buttonsWrapper'>
                        <ButtonToolbar>
                            <Button onClick={handleOpen} style={{'marginRight': '10px'}}> Edit post</Button>
                        </ButtonToolbar>

                        <Modal open={open} onClose={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Edit Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <EditPost
                                    onSubmitHandler={editPostHandler}
                                    title={data.title}
                                    body={data.body}
                                />
                            </Modal.Body>
                        </Modal>

                        <Button color="red" appearance="ghost" onClick={deletePostHandler}>
                            Delete post
                        </Button>
                    </div>
                </Col>

                <Col xs={24} md={14}>
                    <h5 style={{'marginBottom': '20px'}}>Comments:</h5>

                    <List bordered hover>
                        {comments.map(comment => (
                            <List.Item key={comment.id}>
                                <h6 className='commentName'>{comment.name}</h6>
                                <p className='commentEmail'>{comment.email}</p>
                                <p>{comment.body}</p>
                            </List.Item>
                        ))}
                    </List>
                </Col>
            </Row>
        </Grid>
    );
};

export default FullPost;
