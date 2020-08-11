import * as React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'
import styled from "@emotion/styled";

const NotFoundPage = () => (
    <IndexLayout>
        <Centered>
            <Heading>Sorry we can't find this page :(</Heading>
            <p>
                <Link to="/">Go back to the home page</Link>
            </p>
        </Centered>
    </IndexLayout>
)

const Heading = styled.h1`
    margin-bottom: 1rem;
`

const Centered = styled.div`
    text-align: center;
`

export default NotFoundPage
