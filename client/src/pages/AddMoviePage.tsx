import React, { FunctionComponent, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";


const AddMoviePage: FunctionComponent = () => {
    const { user, getAccessTokenSilently } = useAuth0();

    type Movie = {
        title: string,
        mainActor: string
    }

    const [form, setForm] = useState<Movie>({
        title: '',
        mainActor: ''
    });

    const { title, mainActor } = form;

    const onChange = (e: { target: { name: string; value: string; }; }) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const accessToken = await getAccessTokenSilently({
            audience: 'https://moviesclub/api',
            scope: '',
        });

        await fetch('/add-movie', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.sub,
                title,
                mainActor
            })
        });
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Main Actor</Form.Label>
                <Form.Control
                    type="text"
                    name="mainActor"
                    value={mainActor}
                    onChange={onChange}
                    required
                />
            </Form.Group>
            <Button type='submit'>
                Add Movie
            </Button>
        </Form>
    );
}

export default AddMoviePage;