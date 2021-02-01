import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { API_INFORMATION_COUNT, CHARACTERS } from '../../common/queries/queries'
import { css } from '@emotion/react'
import CharacterComponent from '../components/Character'
import {ApolloCharactersInterface, Character} from '../../common/interfaces/Character'
import Loading from '../components/Loading'
import { apiInformation } from '../../cache'
import { ApiInformation, ApolloApiInformationCountInterface } from '../../common/interfaces/Api'

const randomPageNumber = Number((Math.random() * 30).toFixed(0))

const Home = () => {

    const {data, loading, error} = useQuery<ApolloCharactersInterface>(CHARACTERS, {variables: {number: randomPageNumber}})
    const {data: data2, loading: loading2, error: error2} = useQuery<ApolloApiInformationCountInterface>(API_INFORMATION_COUNT)

    if(loading || loading2) return <Loading />
    
    if(error) return <p>An error: {error} has occurred.</p>
    
    const info = {characters: data.characters.info.count, locations: data2.locations.info.count, episodes: data2.episodes.info.count}
    localStorage.setItem("apiInformation", JSON.stringify(info))
    apiInformation(info)

    return (
      <section
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        `}
      >
        {data.characters.results.map((character: Character) => (
          <CharacterComponent key={character.id} character={character} />
        ))}
      </section>
      
    )
}

export default Home