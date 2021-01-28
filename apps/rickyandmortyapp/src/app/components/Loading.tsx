import {css, jsx} from '@emotion/react'
import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loading: React.FC = () => {

    return (
        <article
            css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: grid;
                place-items: center;
            `}
        >
            <ScaleLoader color={"#f08d49"} />
        </article>
    )
}

export default Loading