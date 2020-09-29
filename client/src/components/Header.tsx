import React, { Fragment, FunctionComponent } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header: FunctionComponent = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Navbar>
            <Link to='/'>
                <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            {
                !isAuthenticated ? (
                    <Button onClick={() => loginWithRedirect()}>Log In</Button>
                ) : (
                    <Fragment>
                        <Link to='add-movie' style={{ margin: '0 1rem' }}>
                            <Button>
                                Add Movie
                            </Button>
                        </Link>
                        <Button onClick={() => logout({ returnTo: window.location.origin })}>
                            Log Out
                        </Button>
                    </Fragment>
                )
            }
        </Navbar>
    );
}

export default Header;