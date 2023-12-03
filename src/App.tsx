
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { appRouter } from './router'
import { QueryClientProvider } from 'react-query'
import { apolloClient, queryClient } from './main.config'
import { ApolloProvider } from '@apollo/client';
import DynamicGlobalStyle from './components/styled/GlobalStyled'

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={apolloClient}>

          <RouterProvider router={appRouter} />
        </ApolloProvider>

      </QueryClientProvider>
      <DynamicGlobalStyle />
    </>
  )
}

export default App
