import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { FILTER_CHARACTERS } from '../../common/queries/queries'
import { css } from '@emotion/react'
import Loading from '../components/Loading'
import { ApolloCharactersInterface, Character } from '../../common/interfaces/Character'
import CharacterComponent from '../components/Character'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PaginationComponent from '../components/Pagination'


const Filters = () => {

    const [textFilter, setTextFilter] = useState("")
    const [selectedFilter, setSelectedFilter] = useState("name")
    const [page, setPage] = useState(1)
    
    const [filter, {data, loading, error,}] = useLazyQuery<ApolloCharactersInterface>(FILTER_CHARACTERS, {variables: 
        {param: {[`${selectedFilter}`]: textFilter}, page: page}, onCompleted: () => setCountOfPages(data.characters.info.pages)})
    
    const [countOfPages, setCountOfPages] = useState(0)

    const debounce = (callback, delay) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => { 
            callback(...args);
            }, delay);
        };
    }

    const handleChangeEvent = (event: ChangeEvent<HTMLInputElement> ) => {
        setTextFilter(event.target.value)
        if(event.target.value.length == 0 || event.target.value.length == 1 ) {
            setTextFilter(null)
            setCountOfPages(0)
        }
        debounce((filter()), 700)
    }

    const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedFilter(event.target.value)
    } 

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
        debounce(filter(), 700)
    }

    return (
        <section
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: calc(-60px + 50vh);

                label {
                    color: var(--text);
                }
            `}
        >
            
            <form
                css={css`
                    display: grid;
                    place-items: center;
                    
                    .MuiSvgIcon-root{
                        width: 30px;
                        height: 30px;
                    }

                    .PrivateRadioButtonIcon-checked-7, .MuiRadio-colorSecondary.Mui-checked{
                        color: var(--hover);
                    }

                    .MuiTypography-body1{
                        font-size: 1.5rem;
                        font-weight: 600;
                    }

                    .MuiFormGroup-root{
                        display: flex !important;
                        flex-direction: row;
                    }
                `}
                onSubmit={e => e.preventDefault()}
            >
                <input 
                    type="text" 
                    onChange={handleChangeEvent}
                    placeholder="Ex. Rick Sanchez"
                    css={css`
                        padding: 1rem 1rem 1rem 0;
                        border: none;
                        border-bottom: 2px solid var(--text-gray);
                        outline: none;
                        min-width: 26.7rem;
                        background-color: transparent;
                        font-weight: 600;
                        font-size: 1.6rem;
                        color: var(--text-gray);
                        margin-bottom: 2rem;
                        &:focus{
                            
                            border-image: linear-gradient(to right, var(--hover), rgb(255, 207, 173));
                            border-image-slice: 1;
                        }
                    
                    `}
                />
                <article>
                    <RadioGroup 
                        aria-label="gender" 
                        name="gender1" 
                        value={selectedFilter} 
                        onChange={handleSelect}
                        css={css`
                        display: flex;
                        justify-content: space-between;

                            min-width: 26.7rem;

                            .MuiFormControlLabel-root{
                                margin: 0;
                            }

                            .PrivateSwitchBase-root-1{
                                padding: 0;
                            }
                        `}
                    >
                        <FormControlLabel value="name" control={<StyledRadio/>} label="Name" />
                        <FormControlLabel value="species" control={<StyledRadio />} label="Species" />
                        <FormControlLabel value="type" control={<StyledRadio />} label="Type" />
                    </RadioGroup>
                </article>

                <PaginationComponent pages={{page, countOfPages}} handlePageChange={handlePageChange} />
            </form>

            

            <article
                css={css`
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
              `}
            >
                {loading ? <Loading /> :  (data && data.characters.results.map((character: Character) => (
                    <CharacterComponent key={character.id} character={character} />
                )))}
            </article>

            

        </section>
    )
}

const StyledRadio = withStyles({
    
})(Radio)

export default Filters