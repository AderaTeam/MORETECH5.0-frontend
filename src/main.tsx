import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import UserStore from './store/UserStore.ts';
import { MapStore } from './store/MapStore.ts';

interface State {
  UStore: UserStore,
  MSore: MapStore,
}

const UStore = new UserStore();
const MSore = new MapStore();

export const Context = createContext<State>({
  UStore,
  MSore
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{UStore, MSore}}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          '.input': {
            input: {
              height: '42px',
              border: '1px solid #DCE0EB',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '14px',
              lineHeight: '21px',
            },
            label: {
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
                color: '#2F3441'
            },
            'input::placeholder': {
              color: '#ACB6C3'
            }
          },
          '.segment': {
            label: {
              fontWeight: 400,
              color: '#2F3441'
            },
          },
          '.accordion': {
            borderBottom: 'none',
            button: {
              padding: 0,
              '&:hover': {background: 'none'}
            },
            span: {
              color: '#2F3441',
            },
            div: {
              padding: 0
            }
          },
          '.button': {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            borderRadius: '12px'
          },
          '.checkbox': {
            input: {
              borderRadius: '4px',
            },
            label: {
              paddingLeft: '8px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '21px',
              height: '48px'
            },
            span: {
              padding: '0'
            }
          },
        }),
        defaultRadius: '0.5rem',
        fontFamily: 'VTBGroup, sans-serif',
        fontSizes: { xs: '13px', sm: '12px', md: '14px', lg: '18px', xl: '20px'},
        headings: {
          fontWeight: 500,
          sizes: {
            h1: { fontSize: '1.75rem', lineHeight: '2.229rem' },
            h2: { fontSize: '1.5rem', lineHeight: '1.911rem' },
            h3: { fontSize: '1.25rem', lineHeight: '1.5925rem' },
            h4: { fontSize: '1rem', lineHeight: '1.273rem' },
          }
        },
        colors: {
          'brand': ['#0A2896', '#1E4BD2', '#00AAFF', '#E62632'],
          'gray': ['#2F3441', '#6B7683', '#ACB6C3', '#DCE0EB', '#EAEDF5', '#F3F7FA'],
          'white': ['#FFFFFF'],
          'black': ['#191919'],
        },
      }}
    >
      <App />
    </MantineProvider>
  </Context.Provider>,
)
