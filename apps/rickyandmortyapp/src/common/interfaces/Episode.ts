interface Episode {
    __typename: "Episode",
    air_date: string,
    episode: string,
    id: string | number,
    name: string,
    characters: {
        id: string | number,
        image: string,
        name: string
    }[]
}

interface ApolloEpisodeInterface {
    episode: Episode
}

export {Episode, ApolloEpisodeInterface}