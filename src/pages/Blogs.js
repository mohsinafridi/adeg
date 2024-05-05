import React from 'react'
import Body from '../components/Body/Body'


const Blogs = () => {

    let items = ["asd", "asdas"]
    let title = "Mohsin is calling"
    return (
        <>
            <div>Blogs</div>

            <Body id="body-page" items={items} title={title} />

        </>

    )
}

export default Blogs