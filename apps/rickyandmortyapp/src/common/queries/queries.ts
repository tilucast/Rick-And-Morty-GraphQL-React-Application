import { gql } from "@apollo/client";

const CHARACTERS = gql`
  query Characters($number: Int) {
    characters(page: $number){
      info{
          __typename
          count
          pages
          next
          prev
        }
      results {
        __typename
        id
        name
        species
        status
        episode{
          __typename
          id
          name
        }
        location{
          __typename
          id
          name
        }
        image
      }
    }
  }
`

const ONE_CHARACTER = gql`
  query Character($id: ID!){
    character(id: $id){
      __typename
      id
      image
      name
      species
      status
      type
      gender
      location{
        __typename
        id
        name
        dimension
      }
      episode{
        __typename
        id
        name
        air_date
        episode
      }
    }
  }
`

const ONE_EPISODE = gql`
  query Episode($id: ID!){
    episode(id: $id){
      __typename
      id
      name
      air_date
      episode
      characters{
        id
        name
        image
      }
    }
  }
`

const ONE_LOCATION = gql`
  query Location($id: ID!){
    location(id: $id){
      __typename
      id
      name
      dimension
      type
      residents{
        __typename
        id
        name
        image
      }
    }
  }
`

const FILTER_CHARACTERS = gql`
  query FilterCharacters($page: Int, $param: FilterCharacter){
    characters(page: $page, filter: $param){
      info{
        count
        pages
        next
        prev
      }
      results{
        __typename
        id
        name
        species
        type
        status
        episode{
          __typename
          id
          name
          air_date
          episode
        }
        location{
          __typename
          id
          name
          dimension
        }
        image
      }
    }
  }
`

const API_INFORMATION_COUNT = gql`
  query apiInformationCount {
    episodes{
      info{
        count
        pages
        next
        prev
      }
    }
    locations{
      info{
        count
        pages
        next
        prev
      }
    }
  }
  
`

const API_INFORMATION = gql`
  query GetApiInformation {
    apiInformation @client
  }
`

export {CHARACTERS, 
  ONE_CHARACTER, 
  ONE_EPISODE, 
  ONE_LOCATION, FILTER_CHARACTERS, 
  API_INFORMATION_COUNT, API_INFORMATION}