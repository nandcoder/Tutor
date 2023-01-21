import React from 'react'
import { ButtonGroup, Container, Dropdown, Nav, Navbar, NavLink } from 'react-bootstrap';

function CollapsibleExample({ setPage }) {
    const pages = ['Home', 'Contact'];
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href='/'>Tutor</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {pages.map((page) => (
                            <Nav.Link
                                key={page}
                                onClick={() => { setPage(page) }}
                            >
                                {page}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        <Dropdown as={ButtonGroup} align={{ lg: 'end' }}>
                            {/* <Avatar size='sm' bg="blue.500" /> */}
                            <Dropdown.Toggle as={NavLink} split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu style={{ padding: 0 }}>
                                {/* <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Friends</Dropdown.Item>
                                <Dropdown.Divider /> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;