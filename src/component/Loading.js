import React from 'react'
import { Spinner } from 'reactstrap'

const Loading = () => {
return (
        <div className='lodaing'>
            <Spinner
            color="primary"
            style={{
            height: '3rem',
            width: '3rem'
            }}
            >
            Loading...
            </Spinner>
            <Spinner
            color="primary"
            style={{
            height: '3rem',
            width: '3rem'
            }}
            type="grow"
            >
            Loading...
            </Spinner>
        </div>
)
}

export default Loading
