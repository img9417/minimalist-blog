import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import Posts from '@/components/Posts/Posts'
import { getAllPosts } from '@/lib/blog'

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  type?: string
  lastUpdated?: string
}

interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <ProgressBar />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  let posts = getAllPosts()
  posts = posts.filter((post: Post) => post.type !== 'ps')

  return {
    props: {
      posts,
    },
  }
}

export default Blog
