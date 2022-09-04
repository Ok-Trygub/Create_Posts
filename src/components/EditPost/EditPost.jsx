import React from 'react';
import {Button, ButtonToolbar, Form, Schema} from "rsuite";
import {useState} from "react";
import PropTypes from 'prop-types';


const EditPost = ({onSubmitHandler, onClickBtnHandler, title, body}) => {

    EditPost.propTypes = {
        title: PropTypes.string,
        body: PropTypes.string
    }

    const formDefaultState = {
        title: title ? title : '',
        body: body ? body : '',
    }

    const [postData, setPostData] = useState({...formDefaultState});

    const updatePostData = ({target}) => {
        const updatedPostData = {...postData};

        updatedPostData[target.name] = target.value;
        setPostData(updatedPostData);
    }

    const handler = () => {
        onSubmitHandler(postData);
        setPostData({...formDefaultState});
    }

    const model = Schema.Model({
        title: Schema.Types.StringType().isRequired('isRequired').containsLetter('isRequired').minLength(5, 'Minimum 5 characters required'),
        body: Schema.Types.StringType().isRequired('isRequired').containsLetter('isRequired').minLength(5, 'Minimum 5 characters required')
    });

    return (
        <Form model={model} onSubmit={handler}>
            <Form.Group controlId='title' onChange={updatePostData}>
                <Form.ControlLabel>Title:</Form.ControlLabel>
                <Form.Control name='title' value={postData['title']}/>
            </Form.Group>
            <Form.Group controlId='body' onChange={updatePostData}>
                <Form.ControlLabel>Body:</Form.ControlLabel>
                <Form.Control name='body' value={postData['body']}/>
            </Form.Group>

            <ButtonToolbar>
                <Button appearance="primary" type="submit" onClick={onClickBtnHandler}>
                    Submit
                </Button>
            </ButtonToolbar>
        </Form>
    );
};

export default EditPost;
