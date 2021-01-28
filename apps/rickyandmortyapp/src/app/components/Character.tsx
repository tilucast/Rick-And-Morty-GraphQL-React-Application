import React from 'react'
import {Character} from '../../common/interfaces/Character'
import {css} from "@emotion/react"
import { Link } from 'react-router-dom'

const CharacterComponent: React.FC<{character: Character}> = ({character}) => {

    return (
        <section
            css={css`
                display: flex;
                width: 50rem;
                background-color: rgb(60, 62, 68);
                border-radius: 0.5rem;
                margin: 1rem 2rem 1rem 2rem;
                color: var(--text);
            `}
        >

          <article css={{maxHeight: "21rem"}}>
            <img 
                css={{
                    maxWidth: "23rem",
                    maxHeight: "21rem",
                    margin: "0",
                    borderRadius: "0.5rem"
                }}
                src={character.image} alt={character.name + ' image'}
            />
          </article>

          <article 
            css={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            <Link css={css`
                text-decoration: none;
                color: var(--text);
                font-size: 1.8rem;
                transition: all .3s;
                &:hover{
                    color: var(--hover);
                }
            `} 
                to={`/character/${character.id}`} 
            >
                <strong>   
                    {character.name}
                </strong>
            </Link>

            <span css={css`display: flex; align-items: center;`}>
                <div
                    css={css`
                        background-color: ${
                            character.status === "Alive" ? "var(--success);" : 
                            character.status === "unknown" ? "gray" : "var(--warning);"
                        };
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        margin-right: 5px;
                    `}
                ></div>
                <p css={baseText}>
                  {character.status} - {character.species}
                </p>
            </span>

            <span>
                <p css={descriptionText}> Last known location:</p>

                <Link to={`/location/${character.location.id}`} css={css`
                    color: var(--text);
                    ${[baseText, activeText]}
                `}>
                    {character.location.name}
                </Link>
            </span>

            <span>
                <p css={descriptionText}>First seen in:</p>
                
                <Link 
                    css={css`text-decoration: none; color: var(--text); ${activeText}`} 
                    to={`/episode/${character.episode[0].id}`}
                >
                    {character.episode[0].name}
                </Link> 
                
            </span>

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

export default CharacterComponent