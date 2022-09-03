import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import CreatePost from './pages/CreatePost/CreatePost';
import FullPost from './pages/FullPost/FullPost';
import {Container, Header, Content, Grid, Row} from "rsuite";
import Navigation from './components/Navigation/Navigation';


function App() {
    return (
        <div className="App">
            <Container>
                <Grid>
                    <Row>
                        <Header style={{'margin': '20px 0 15px'}}>
                            <Navigation/>
                        </Header>
                    </Row>
                </Grid>

                <Content>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="createPost" element={<CreatePost/>}/>
                        <Route path="fullPost/:id" element={<FullPost/>}/>

                    </Routes>
                </Content>
            </Container>
        </div>
    );
}

export default App;
