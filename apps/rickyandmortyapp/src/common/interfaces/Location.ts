interface Location {
    __typename: "Location",
    dimension: string,
    id: string | number,
    type: string,
    name: string,
    residents: {
        __typename: "Character",
        id: string | number,
        image: string,
        name: string
    }[]
}

interface ApolloLocationInterface {
    location: Location
}

export {Location, ApolloLocationInterface}