import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({uri: '/graphql'});

export function provideClient(): ApolloClient {
  this.networkInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}; // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        req.options.headers.authorization =
          localStorage.getItem('token') || null;
        next();
      }
    }
  ]);
  return new ApolloClient({ networkInterface: this.networkInterface });
}
