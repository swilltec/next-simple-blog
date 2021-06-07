import ArticleList from '../components/ArticleList'
import Meta from '../components/Meta'
import { server } from '../config'


export default function Home({articles}) {
  return (
    <div>
      <Meta />
      
      <ArticleList articles={articles} />
   
    </div>
  )
}


export const getStaticProps = async () => {
  const res =  await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}