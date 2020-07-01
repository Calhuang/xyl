import gql from 'graphql-tag'

export const BODY_LOADING = gql`
  query SetLoadFuncs {
    loadState @client {
      showLoading
      hideLoading
    }
  }
`;

export const GET_BODY_LOADING = gql`
  query GetLoadFuncs {
    loadState @client {
      showLoading
      hideLoading
    }
  }
`;