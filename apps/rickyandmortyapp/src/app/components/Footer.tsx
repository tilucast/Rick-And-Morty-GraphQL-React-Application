import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
    return (
        <footer
            css={css`
                padding: 8rem 0;
                background-color: var(--darker-background);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-gray);
            `}
        >
            <span>
                ❮❯ by 
                <a href="https://github.com/tilucast" target="blank" 
                    css={css`
                        color: var(--text);
                        margin: 0 1rem;
                        border-bottom: 2px solid var(--hover);
                        transition: all .2s;
                        text-decoration: none;
                        &:hover{
                            border: none;
                            color: var(--hover);
                        }
                    `}
                >
                    Lucas Tavares
                </a> 2021
            </span>
        </footer>
    )
}

export default Footer