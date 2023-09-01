import { gql } from '@apollo/client/core';

export const GET_POPULAR_QUERY = gql`
    query GetPopular {
        popularMovies @rest(type: "PopularMovie", path: "/movie/popular") {
            results @type(name: "Movie") {
                id
                title
                backdrop_path
                poster_path
                overview
            }
        }
    }
`;
