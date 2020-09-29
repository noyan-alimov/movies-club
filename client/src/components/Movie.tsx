import React, { FunctionComponent } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { MovieType } from '../entities/Movie';

import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/esm/Button';

interface Props {
    key: string,
    movie: MovieType
}

const Movie: FunctionComponent<Props> = (props) => {
    const { user, getAccessTokenSilently } = useAuth0();

    const onDelete = async () => {
        const accessToken = await getAccessTokenSilently({
            audience: 'https://moviesclub/api',
            scope: '',
        });

        await fetch('http://localhost:8000/delete-movie', {
            method: 'delete',
            headers: { 
                Authorization: `Bearer ${accessToken}`,
                'Content-type': 'application/json' 
            },
            body: JSON.stringify({
                userId: user.sub,
                movieId: props.movie._id
            })
        });
    }

    return (
        <Container style={{ margin: '5rem' }}>
            <h1>{props.movie.title}</h1>
            <h1>{props.movie.mainActor}</h1>
            {
                user && (
                    user.sub === props.movie.userId &&  (
                        <Button variant='danger' onClick={onDelete}>Delete</Button>
                    )
                )
            }
        </Container>
    );
}

export default Movie;