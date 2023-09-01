import { gql } from '@apollo/client/core';

export const GET_NOW_PLAYING_QUERY = gql`
    query GetNowPlaying {
        nowPlayingMovies @rest(type: "NowPlaying", path: "/movie/now_playing") {
            results @type(name: "Movie") {
                id
                backdrop_path
                poster_path
                title
            }
        }
    }
`;
