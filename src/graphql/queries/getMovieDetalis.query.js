import { gql } from '@apollo/client/core';

export const GET_MOVIE_DETAILS_QUERY = gql`
    query GetMovieDetails($id: String!) {
        movieDetails(id: $id) @rest(type: "MovieDetails", path: "/movie/{args.id}") {
            id
            title
            backdrop_path
            poster_path
            release_date
            overview
            vote_average
            vote_count
        }
    }
`;
