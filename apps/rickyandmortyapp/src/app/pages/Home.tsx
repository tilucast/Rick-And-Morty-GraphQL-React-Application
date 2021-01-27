import React from 'react'

import { useQuery } from '@apollo/client'
import { CHARACTERS } from '../../common/queries/queries'
import { css } from '@emotion/react'
import CharacterComponent from '../components/Character'
import {ApolloCharactersInterface, Character} from '../../common/interfaces/Character'
import Loading from '../components/Loading'

const Home = () => {
    const number = Number((Math.random() * 30).toFixed(0))
    const {data, loading, error} = useQuery<ApolloCharactersInterface>(CHARACTERS, {variables: {number}})

    if(loading) return <Loading />
    
    if(error) return <p>An error: {error} has occurred.</p>

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