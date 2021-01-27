import { useQuery } from '@apollo/client'
import { css } from '@emotion/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApolloEpisodeInterface } from '../../common/interfaces/Episode'
import { ONE_EPISODE } from '../../common/queries/queries'
import Loading from '../components/Loading'

const Episode = () => {

    const {id} = useParams<{id?: string}>()

    const {data, loading, error} = useQuery<ApolloEpisodeInterface>(ONE_EPISODE, {variables: {id}})

    if(loading) return <Loading />
    if(error) return <p>An error: {error} has occurred.</p>

    return (
        <section id={String(data.episode.id)}
            css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            color: var(--text);
        `}>
            <div css={css`width: 70%`}>
                <article 
                    css={css`
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        margin-bottom: 3rem;
                    `}
                >
                    <p css={css`font-size: 2.8rem; text-align:center;`}>{data.episode.name}</p>
                    <p css={css`font-size: 2.1rem;`}>{data.episode.episode}</p>
                    <p css={css`font-size: 2.1rem;`}>{data.episode.air_date}</p>
                </article>
                
                <article
                    css={css`
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                        grid-gap: 1rem;

                        @media (max-width: 507px){
                            grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
                        }
                    `}
                >
                    {data.episode.characters.map(character => (
                        <article css={css`display: flex; align-items: center;`} key={character.id}>
                            <img css={css`width: 40px; height: 40px; margin-right: 1rem;`} src={character.image} alt={character.name}/>
                            <Link 
                                css={css`
                                    color: var(--text);
                                    ${activeText}
                                `}
                                to={`/character/${character.id}`}
                            >
                                {character.name}
                            </Link>
                        </article>
                    ))}
                </article>
            </div>
            
        </section>
    )
}

const activeText = css`
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: var(--hover);
        font-weight: 600;
    }
`

export default Episode