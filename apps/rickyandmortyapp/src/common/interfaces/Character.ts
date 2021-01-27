interface Character {
    __typename: "Character",
    id: number,
    image: string,
    name: string,
    type: string,
    gender: string,
    episode: {
        __typename: "Episode",
        id: number,
        name: string
        air_date: string,
        episode: string,
    }[],
    location: {
        __typename: "Location",
        id: number,
        name: string,
        dimension: string,
        episode: string
    },
    species: string,
    status: string
}

interface ApolloCharacterInterface {
    character: Character
}

interface ApolloCharactersInterface {
    characters: {
        results: Character[]
    }
}

export {Character, ApolloCharacterInterface, ApolloCharactersInterface}