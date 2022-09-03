import React from 'react';
import {Button} from 'rsuite';
import {useNavigate} from 'react-router-dom';
import List from 'rsuite/List';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
import 'rsuite/dist/rsuite.min.css';
import './MainPage.scss';
import {useGetPostsQuery} from '../../store/postsApi/postsApi';


const MainPage = () => {
    const {data, isLoading} = useGetPostsQuery();
    const navigate = useNavigate();

    if (isLoading) return <h3>Loading ...</h3>;

    const ReadMoreHandler = (id) => () => {
        navigate('fullPost/' + id)
    }

    const CreatePostHandler = () => {
        navigate('createPost/')
    }

    return (
        <Grid>
            <Row>
                <Col xs={18}>
                    <Button className='navBtn' color="orange"
                            appearance="primary" onClick={CreatePostHandler}>
                        + Create Post
                    </Button>

                    <List bordered hover>
                        {data.map(post => (
                            <List.Item key={post.id}> <span className='postTitle'>{post.title}</span>
                                <Button color="yellow" appearance="ghost"
                                        className='postBtn' onClick={ReadMoreHandler(post.id)}>
                                    Read more
                                </Button>
                            </List.Item>
                        ))}
                    </List>
                </Col>
            </Row>
        </Grid>

    );
};

export default MainPage;
