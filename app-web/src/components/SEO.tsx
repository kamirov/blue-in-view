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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta property="og:title" content={data.site.siteMetadata.title} />}
                <meta property="og:description" content={data.site.siteMetadata.description} />}
                <meta property="og:url" content={data.site.siteMetadata.siteUrl} />}
            </Helmet>
        )}
    />
)

export default SEO
