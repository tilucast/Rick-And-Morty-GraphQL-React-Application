interface ApiInformation {
    apiInformation: {
        characters: number,
        locations: number,
        episodes: number
    }
}

interface ApolloApiInformationCountInterface {
    episodes: {
        info: {
            count: number,
            next: number | null,
            pages: number,
            prev: number | null
        }
    },
    locations: {
        info: {
            count: number,
            next: number | null,
            pages: number,
            prev: number | null
        }
    }
}

export {ApiInformation, ApolloApiInformationCountInterface}