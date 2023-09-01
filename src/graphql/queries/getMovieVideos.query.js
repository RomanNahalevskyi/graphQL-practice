import { gql } from '@apollo/client/core';

export const GET_MOVIE_VIDEOS_QUERY = gql`
    query GetMovieVideos($id: String!) {
        movieVideos(id: $id) @rest(type: "GetVideos", path: "/movie/{args.id}/videos") {
            results @type(name: "Videos") {
                name
                key
                type
            }
        }
    }
`;
