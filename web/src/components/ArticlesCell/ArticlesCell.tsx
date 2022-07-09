import type { PostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query PostsQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<PostsQuery>) => {
  return (
    <ul>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </ul>
  )
}
