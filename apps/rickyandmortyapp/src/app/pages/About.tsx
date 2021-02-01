import { css } from '@emotion/react'
import styled from "@emotion/styled"
import React from 'react'

const About = () => {
    return (
        <section
            css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 7rem;
                color: var(--text);

                a {
                    ${href}
                }

                article {
                    ${article}
                }

                h3 {
                    ${bTitle}
                }

                p {
                    font-size: 1.7rem;
                }
            `}
        >

            <h1
                css={css`
                    font-size: 3rem;
                    margin-bottom: 1rem;
                `}
            >Rick and Morty GUI</h1>

            <article>
                <h3>What is this?</h3>
                <p>
                    This is a "GUI" for the <a href="https://rickandmortyapi.com/">Rick and Morty API</a>. 
                    This project is basically a interface for you to see details about the show. For example, details about a specific character,
                    in which episodes certain character appears, etc.
                    I took inspiration to design this project from the api documentation website, thats why both look almost identical, but i have
                    nothing to do with the people behind the API.
                </p>
            </article>

            <article>
                <h3 >Who are you?</h3>
                <p>I am <a href="https://github.com/tilucast">Lucas Tavares</a>, just a dude learning how to code.</p>
            </article>

            <article>
                <h3 >Which tecnologies have you used to build this?</h3>
                <p>
                    You can check the public repository on: 
                     <a href="https://github.com/tilucast/Rick-And-Morty-GraphQL-React-GUI">https://github.com/tilucast/Rick-And-Morty-GraphQL-React-GUI</a>.
                    But basically, React, Nx to build the overall structure, and Apollo Client, since i am consuming the GraphQL api.
                    But they do have a rest api too.
                </p>
            </article>
            
            <article>
                <h3 >Help them keep the API live</h3>
                <p>
                    I don't know them, but i believe that they are not making any money out of this. 
                    You can help them <a target="blank" href="https://rickandmortyapi.com/help-us">financially</a>, or contributing
                    to the <a href="https://github.com/afuh/rick-and-morty-api" target="blank">public api repository</a> if you want.
                </p>
            </article>
            
        </section>
    )
}

const bTitle = css`
    font-size: 2.2rem;
`

const href = css`
    border-bottom: 2px solid var(--hover);
    color: var(--text);
    text-decoration: none;
    transition: all .2s;
    &:hover{
        border: none;
        color: var(--hover);
    }
`
const article = css`
    margin: 2.5rem 0;
`

export default About