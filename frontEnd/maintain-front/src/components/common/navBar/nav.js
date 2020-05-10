import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function navBar() {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Link to='home'>Navbar</Link>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>Features</Nav.Link>
                    <Nav.Link href='#pricing'>Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type='text'
                        placeholder='Search'
                        className='mr-sm-2'
                    />
                    <Button variant='outline-info'>Search</Button>
                </Form>
                <Nav>
                    <Link to='Login'>Login</Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default navBar;
