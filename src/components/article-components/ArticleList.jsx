import PageHeading from "../PageHeading"
import ArticleSearch from "./ArticleSearch"
import ArticlePreviewCard from "./ArticlePreviewCard"
import { useEffect, useState } from "react"

const ArticlesList = () => {
  const [ search, setSearch ] = useState('')
  const [ filteredList, setFilteredList ] = useState(null)

 useEffect(() => {
    fetch('/public/articleData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      setFilteredList(data)
    })
    .catch(error => {
      console.error('Error: ', error)
    })
  }, [])

  const handleSortAsc = (selection) => {
    if (selection === 'asc') {
      const ascArticles = [...filteredList].sort((a,b) => new Date(a.published) - new Date(b.published))
      setFilteredList(ascArticles)
    } else if (selection === 'desc') {
      const descArticles = [...filteredList].sort((a,b) => new Date(b.published) - new Date(a.published))
      setFilteredList(descArticles)
    }
  }

  const handleSearch = (searchValue) => {
    const newList = filteredList.filter(article => {
      return search.toLowerCase() === '' ? article : article.title.toLowerCase().includes(search)
    })
    setFilteredList(newList)
    console.log(searchValue)
  }

  return (
    <section className="w-full">
      <PageHeading>Articles</PageHeading>
      <ArticleSearch search={search} setSearch={setSearch} handleSearch={handleSearch} handleSortAsc={handleSortAsc}/>
      <ul className="flex flex-col gap-4">
        {filteredList && filteredList.map(article => {
          return (
          <li key={article.id}>
            <ArticlePreviewCard 
              title={article.title}
              id={article.id}
              author={article.author}
              preface={article.preface}
              src={article.src}
              mainText={article.mainText}
              published={article.published}
            />
          </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ArticlesList