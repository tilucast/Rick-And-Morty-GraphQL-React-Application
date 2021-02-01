import React from 'react'
import { useQuery } from '@apollo/client'
import { css } from '@emotion/react'
import {Link, useParams} from 'react-router-dom'
import {Character, ApolloCharacterInterface} from '../../common/interfaces/Character'
import { ONE_CHARACTER } from '../../common/queries/queries'
import Loading from '../components/Loading'

const CharacterPage = () => {

    const {id} = useParams<{id?: string}>()
    
    const {data, loading, error} = useQuery<ApolloCharacterInterface>(ONE_CHARACTER, {variables: {id}})

    if(loading) return <Loading />
    if(error) return <p>An error: {error} has occurred.</p>

    return (
        <section
            css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;
                color: var(--text);

                @keyframes Image {
                    from {
                        opacity: 0
                    }
                    to{
                        opacity: 1
                    }
                }
            `}
        >   

            <img 
                css={css`
                    align-self: flex-start;
                    border: 5px solid var(--hover);
                    border-radius: 8px;
                    overflow: hidden;
                    margin-right: 3rem;
                    margin-bottom: 3rem;
                    animation: Image .5s linear;
                `}
                src={data.character.image} alt={data.character.name}
            />

            <article 
                css={css`
                    display: flex;
                    flex-direction: column;
                    min-width: 30rem;
                `}
                id={String(data.character.id)}
            >
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                    `}
                >
                    <article css={css`${(data.character.name.length || data.character.species.length >= 17 )  && 'margin-right: 2rem;'}`}>
                        <p
                            css={css`
                                font-size: 1.8rem;
                            `}
                        >
                            {data.character.name}
                        </p>

                        <span css={css`display: flex; align-items: center;`}>
                            <div
                                css={css`
                                    background-color: ${
                                        data.character.status === "Alive" ? "var(--success);" : 
                                        data.character.status === "unknown" ? "gray" : "var(--warning);"
                                    };
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    margin-right: 5px;
                                `}
                            ></div>
                            {data.character.status}
                        </span>

                        <p> SPECIES: {data.character.species}</p>
                        <p> TYPE: {data.character.type}</p>
                        <p> GENDER: {data.character.gender}</p>
                    </article>

                    <article
                        css={css`${data.character.location.dimension?.length >= 17 && 'margin-left: 2rem;'}`}
                        id={String(data.character.location.id)}
                    >
                        <span>
                            <p css={css`
                                font-size: 1.4rem;
                                ${descriptionText}
                            `}> Last known location:</p>

                            <Link to={`/location/${data.character.location.id}`} css={css`
                                display: block;
                                color: var(--text);
                                ${[baseText, activeText]}
                                
                            `}>
                                {data.character.location.name}
                            </Link>
                        </span>

                        <span>Dimension: {data.character.location.dimension}</span>
                    </article>

                </div>

                <article
                    css={css`
                        margin: 3rem 0;
                    `}
                >
                    
                    <span>
                        <p css={css`
                            font-size: 1.4rem;
                            ${descriptionText}
                        `}>First seen in:</p>
                        <Link 
                            to={`/episode/${data.character.episode[0].id}`}
                            css={css`
                                color: var(--text);
                                ${activeText}
                            `}
                        >
                            {data.character.episode[0].name}
                        </Link>
                    </span>
                </article>

                <article>
                    <p css={css`font-size: 1.7rem;  margin-bottom: 1rem;`}>Episodes in which this character appears:</p> 
                    {data.character.episode.map(episode => (
                        <article css={css`margin-bottom: 1rem; border-bottom: 2px solid var(--inline-color);`} key={episode.id}>
                            <Link 
                                css={css`color: var(--text); ${[activeText, baseText]}`}
                                to={`/episode/${episode.id}`}
                            >
                                {episode.name}
                            </Link>
                            <p>{episode.episode}</p>
                            <p>{episode.air_date}</p>
                        </article>
                    ))}
                </article>

            </article>

        </section>
    )
}

const baseText = css`
    font-weight: 300;
    transition: all .2s;
    max-width: 25rem; 
`

const activeText = css`
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: var(--hover);
        font-weight: 600;
    }
`

const descriptionText = css`
    color: var(--text-gray);
    font-weight: 300;
    margin-bottom: .5rem;
`

export default CharacterPage