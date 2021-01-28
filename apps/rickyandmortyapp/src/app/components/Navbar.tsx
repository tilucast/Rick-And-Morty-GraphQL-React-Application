import React from 'react'
import { css } from '@emotion/react'
import {ReactComponent as RickAndMortySvg} from '../../assets/Untitled.svg'
import {NavLink} from 'react-router-dom'

const Navbar = () => {


    return (
        <nav
            css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem 2rem;
            `}
        >   
            <section css={css`
                display: flex;
                align-items: flex-start;   
            `}>  
                
                <NavLink to="/">
                    <RickAndMortySvg width={40} height={40}/>
                </NavLink>
                
            </section>
            

            <section css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.5rem;
                font-weight: 600;
             `}>
                <NavLink to="/about" 
                    css={css`
                        color: var(--background);
                        text-decoration: none;
                        transition: all .2s;
                        margin-right: 2rem;
                        &:hover{
                            color: var(--hover);
                        }
                    `}
                    href="/about"
                >ABOUT
                </NavLink>

                <a css={css`
                    text-decoration: none;
                    border: 1px solid var(--hover);
                    color: var(--background);
                    padding: 1rem 1.7rem;
                    border-radius: 8px;
                    transition: all .2s;
                    &:hover{
                        background-color: var(--hover);
                        color: var(--text);
                    }
                `}
                    href="https://rickandmortyapi.com/help-us"
                    target="blank"
                >
                    HELP THEM
                </a>
                
            </section>
            
        </nav>
        
    )
}

export default Navbar