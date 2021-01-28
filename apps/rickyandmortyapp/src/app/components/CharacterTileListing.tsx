import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface characters {
    id: string|number,
    name: string,
    image: string
}

const CharacterTileListing: React.FC<{characters: characters[]}> = ({characters}) => {

    return (
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
            {characters.map((character: characters) => (
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

export default CharacterTileListing