import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ONE_EPISODE } from '../../common/queries/queries'

const Episode = () => {

    const {id} = useParams<{id?: string}>()

    const {data, loading, error} = useQuery(ONE_EPISODE, {variables: {id}})

    console.log(data);
    console.log(id);

    return (
        <p>Episode page {id}</p>
    )
}

export default Episode