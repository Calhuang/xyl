import gql from 'graphql-tag'

export const BODY_LOADING = gql`
  query SetLoadFuncs {
    loadState @client {
      bodyLoading
    }
  }
`;

export const GET_BODY_LOADING = gql`
  query GetLoadFuncs {
    loadState @client {
      bodyLoading
    }
  }
`;
