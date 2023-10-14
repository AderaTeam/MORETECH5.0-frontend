import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import UserStore from './store/UserStore.ts';
import { MapStore } from './store/MapStore.ts';
import { globalStyles } from './styles/globalStyles.ts';
import { DrawerStore } from './store/DrawerStore.ts';

interface State {
  UStore: UserStore,
  MStore: MapStore,
  DStore: DrawerStore,
}

const UStore = new UserStore();
const MStore = new MapStore();
const DStore = new DrawerStore();

export const Context = createContext<State>({
  UStore,
  MStore,
  DStore,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{UStore, MStore, DStore}}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => (globalStyles),
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
          'focus': ['#CCEEFF', '#4CC864', '#F1A038', '#CA181F'],
        },
      }}
    >
      <App />
    </MantineProvider>
  </Context.Provider>,
)
