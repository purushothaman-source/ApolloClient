import { ApolloClient, InMemoryCache,gql,useQuery,ApolloProvider } from '@apollo/client';
import { render } from 'react-dom';
import App from './App'
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );