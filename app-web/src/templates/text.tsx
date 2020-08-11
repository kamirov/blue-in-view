import * as React from 'react'
import { graphql } from 'gatsby'

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
        </Content>
    </IndexLayout>
}

const Heading = styled.h1`
    text-align: center;
`

const Content = styled.div`
    max-width: ${widths.md}px;
    margin: auto;
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
