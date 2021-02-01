import React, { ChangeEvent } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { css } from '@emotion/react'

const PaginationComponent: 
    React.FC<{pages: {page, countOfPages}, handlePageChange: (event: ChangeEvent<unknown>, value: number) => void}> 
    = ({pages, handlePageChange}) => {
    return (
        <>
            {pages.countOfPages && <Pagination 
                page={pages.page} 
                count={pages.countOfPages} 
                onChange={handlePageChange}
                color='primary'
                css={css`
                    margin: 2rem 0 2rem 2rem;

                    ul li button{
                        color: var(--text);

                        &:hover{
                            background-color: var(--hover);
                        }
                    }

                    .MuiPaginationItem-textPrimary.Mui-selected{
                        background-color: var(--hover);
                        transition: all .2s;
                        &:hover{
                            background-color: rgb(212, 128, 70);
                            
                        }
                    }

                    .MuiPaginationItem-textPrimary.Mui-selected.Mui-focusVisible{
                        background-color: var(--hover);
                    }

                    .MuiPaginationItem-ellipsis{
                        font-size: 2rem;
                        color: var(--text);    
                    }

                    .MuiPaginationItem-icon{
                        font-size: 2rem;
                    }

                    .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-page.MuiPaginationItem-textPrimary{
                        font-size: 1.5rem;
                    }
                `}
            /> || ""}
        </>
    )
}

export default PaginationComponent