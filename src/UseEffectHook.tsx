import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [resorceType, setResorceType] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {        //useEffect is called everytime we render any component
        fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
            .then((response => response.json()))
            .then(json => setItems(json))
    }, [resorceType])


    //every time resorceType changes useEffect is used
    //useEffect takes a second parameter i.e an array . useEffect is called when we render the specific component mentioned in the second argument i.e the array

    return (
        <div>
            <button onClick={() => setResorceType('posts')}>Posts</button>
            <button onClick={() => setResorceType('users')}>Users</button>
            <button onClick={() => setResorceType('comments')}>Comments</button>
            <h1>{resorceType}</h1>
            <h1> ITEMS </h1>
            {items.map( items =>{
                return <pre>{JSON.stringify(items)}</pre>}
                
            )}
        </div>
    )
}

export default UseEffectHook
