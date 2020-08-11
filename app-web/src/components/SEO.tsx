import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string
            description: string
            keywords: string
            siteUrl: string
        }
    }
}

const SEO: React.FC = () => (
    <StaticQuery
        query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
        render={(data: StaticQueryProps) => (
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    { name: 'description', content: data.site.siteMetadata.description },
                    { name: 'keywords', content: data.site.siteMetadata.keywords }
                ]}
            >
                <meta property="og:title" content={data.site.siteMetadata.title} />}
                <meta property="og:description" content={data.site.siteMetadata.description} />}
                <meta property="og:url" content={data.site.siteMetadata.siteUrl} />}
            </Helmet>
        )}
    />
)

export default SEO
