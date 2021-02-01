import { useQuery } from '@apollo/client'
import { css } from '@emotion/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ApolloLocationInterface } from '../../common/interfaces/Location'
import { ONE_LOCATION } from '../../common/queries/queries'
import CharacterTileListing from '../components/CharacterTileListing'
import Loading from '../components/Loading'

const Location = () => {

    const {id} = useParams<{id?: string}>()

    const {data, loading, error} = useQuery<ApolloLocationInterface>(ONE_LOCATION, {variables: {id}})

    if(loading) return <Loading />
    if(error) return <p>An error: {error} has occurred.</p>

    return (
        <section 
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                color: var(--text);
            `}
        >

            <div css={css`width: 70%;`}>
                <article 
                    css={css`
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        margin-bottom: 3rem;
                    `}
                >
                    <p css={css`font-size: 2.8rem; text-align:center;`}>Dimension: {data.location.dimension}</p>
                    <p css={css`font-size: 2.1rem;`}>{data.location.name}</p>
                    <p css={css`font-size: 2.1rem;`}>Type: {data.location.type}</p>
                </article>

                <p 
                    css={css`
                        text-align: center;
                        font-size: 2.5rem;
                        margin-bottom: 4rem;
                    `}
                >Residents of {data.location.name}</p>

                <CharacterTileListing characters={data.location.residents} />

            </div>

        </section>
    )
}

export default Location