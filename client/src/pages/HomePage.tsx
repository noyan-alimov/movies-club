import React, { Fragment, FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Movie from '../components/Movie';
import { MovieType } from '../entities/Movie';

const HomePage: FunctionComponent = () => {
    type StateType = {
        loading: boolean,
        movies: MovieType[]
    }

    const [state, setState] = useState<StateType>({
        loading: true,
        movies: []
    });

    const getMovies = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/get-movies`);
        const data = await res.json();
        setState({ loading: false, movies: data.data });
    }

    if (state.loading) {
        return <Button onClick={() => getMovies()}>Get Movies</Button>
    } else {
        return (
            <Fragment>
                {
                    state.movies.map(movie => <Movie key={movie._id} movie={movie} />)
                }
            </Fragment>
        ); 
    }
}

export default HomePage;