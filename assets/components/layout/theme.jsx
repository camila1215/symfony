import { createTheme, ThemeProvider } from '@mui/material/styles';
const rojo = '#ec1c21';
const rojoClaro = '#c53f45';
export const generalTema = createTheme({
    palette: {
        primary: {
            main: '#6D6D6D',
            contrastText: "#ffffff",
        },
        secondary: {
            main: rojo,
            contrastText: "#ffffff",
        },
        neutral:{
            main: '#64748B',
            contrastText: '#fff',
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Myriad Pro"',
            '"Myriad Pro Bold"',
            '"Myriad Pro Cond"',
            '"Myriad Pro Bold Cond"',
        ].join(',')
    },
    components:{
        MuiButton: {
            styleOverrides:{
                root: {
                    marginTop: '1em',
                    background: rojo,
                    textAlign: 'center',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#e95c5f',
                    }
                },
            }
        },
        MuiTabs: {
            root: {
                letterSpacing :'1.5px',
                background: '#e6e6e6',
            },
            indicator: {
                backgroundColor: rojoClaro,
                top: 0
            }
        },
        MuiTab:{
            border : '1px solid #282c2a1a',
            root: {
                letterSpacing :'1.5px',
                borderBottom :'1px solid #d2d1d1',
                fontFamily: [
                    '"Myriad Pro"',
                    '"Myriad Pro Bold"',
                    '"Myriad Pro Cond"',
                    '"Myriad Pro Bold Cond"',
                ].join(','),
                '&$selected': {
                    backgroundColor: '#f5f5f5',
                    color: rojoClaro,
                    fontWeight: 'bold',
                },

            }

        }
    }

});
