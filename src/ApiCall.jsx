import React, { useState } from 'react'
import { useEffect } from 'react'

function ApiCall() {
    const [data,setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let resParse = await res.json()
            setData(resParse)
        }
        getData()
    })
    return (
        <div>
            {data.map((i)=><li>{i.body}</li>)}
            </div>
    )
}
export default ApiCall