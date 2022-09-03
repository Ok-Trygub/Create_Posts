import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Navigation.scss';
import {Nav, Button} from "rsuite";
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
import FolderIcon from '../../assets/icons/FolderIcon'

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <Row>
            <Col xs={18}>
                <Nav className='navWrapper'>
                    <Nav.Item eventKey="home" onClick={() => navigate('/')}>
                        <FolderIcon/>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>

    );
};

export default Navigation;
