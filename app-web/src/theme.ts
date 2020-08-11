import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
    primary: '#46c1be',
    secondary: '#f68b1f',
    success: '#37b635',
    error: '#ec1818',
    text: '#444',
    link: '#46c1be',
    background: '#fff',
    table: {
        border    : '#eee',
        alternate : '#bbb'
    },
}

export const fonts = {
    sansSerif:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary,
            contrastText: "#fff",
        },
        secondary: {
            main: colors.secondary,
        },
        error: {
            main: colors.error,
        },
        background: {
            default: colors.background,
        },
    },
})

export default theme
