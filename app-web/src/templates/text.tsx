import * as React from 'react'
import {graphql, Link} from 'gatsby'

import IndexLayout from '../layouts'
import { FunctionComponent } from 'react'
import styled from "@emotion/styled";
import { widths } from "../styles/dimensions";

type Props = {
    data: {
        markdownRemark: {
            html: string
            excerpt: string
            frontmatter: {
                title: string
            }
        }
    }
}

const Text: FunctionComponent<Props> = ({ data }) => {


    const content = <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    return <IndexLayout>
        <Content>
            <Heading>{data.markdownRemark.frontmatter.title}</Heading>
            {content}

            <PostText>
                <Link to={"/"}>
                    <span>&#8592; Back home</span>
                </Link>
            </PostText>
        </Content>
    </IndexLayout>
}

const PostText = styled.div`
    text-align: center;
    margin-top: 4rem;
    font-weight: bold;
`

const Heading = styled.h1`
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

const Content = styled.div`
    max-width: ${widths.md}px;
    margin: auto;

    h2 {
        margin-bottom: 1.2rem;
    }
`

export default Text

export const query = graphql`
  query TextQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
