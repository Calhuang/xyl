import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation CreatePost($body: String!, $image: String!, $title: String!, $exif: String!) {
    createPost(body: $body, image: $image, title: $title, exif: $exif) {
      id
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts($page: Int!) {
    allPosts(page: $page) {
      id
      body
      title
      image
      exif
    }
  }
`;