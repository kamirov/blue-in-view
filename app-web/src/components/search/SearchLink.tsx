import * as React from 'react'

type Props = {
    className?: string
    query: string
    title?: string
}

const SearchLink: React.FC<Props> = ({className, query, title, children} ) => {
    return <a href={`/search/?q=${query}`} className={className} title={title}>{children}</a>
}

export default SearchLink
