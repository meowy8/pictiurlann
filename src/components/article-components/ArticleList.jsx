import { Link, Outlet } from "react-router-dom"
import PageHeading from "../PageHeading"
import ArticleSearch from "./ArticleSearch"
import ArticlePreviewCard from "./ArticlePreviewCard"

const ArticlesList = () => {
  const articleData = [
    { title: 'Cinematic Poetry: Unraveling the Subtle Brilliance of Hong Sang-soo',
      id: 1,
      author: 'John Doe',
      preface: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada justo nec quam fermentum, ac laoreet urna euismod. Vestibulum at leo vel libero malesuada feugiat. Aliquam erat volutpat.',
      src: '/media/Novelists-Film-Header.webp',
      mainText: 'Proin ac augue vel elit cursus efficitur. Suspendisse ac sapien vel purus blandit cursus. Fusce dignissim, justo eget vulputate mattis, ex quam aliquam quam, sit amet tincidunt justo mauris ac purus. Ut quis erat a arcu ultricies rhoncus. Integer vel lectus vel nisl efficitur scelerisque. Curabitur fringilla libero et erat tincidunt, in egestas leo volutpat. Sed vitae enim vel justo vehicula interdum. Curabitur ultrices, velit nec pharetra commodo, felis turpis fringilla nunc, id euismod odio elit vitae libero. Vivamus auctor gravida ante eu efficitur. Curabitur at tortor et neque congue suscipit. Nullam feugiat risus vel urna dapibus, eu lacinia orci vulputate. \n\n Quisque in massa nec mi dignissim volutpat. Morbi euismod, felis at fermentum fermentum, mauris justo dictum nisi, id fringilla libero dui ut felis. Vivamus ullamcorper, sem ac congue vestibulum, nulla quam viverra turpis, in rhoncus mi libero nec elit. Praesent eu arcu nec justo tristique facilisis. Suspendisse id metus in ligula bibendum tristique. Sed dapibus metus eu arcu congue, vitae bibendum orci finibus. Aenean sit amet metus quis orci sodales vestibulum. Integer eu justo in elit sodales tincidunt id eu dui. Vivamus non fringilla leo. Sed rhoncus velit vel nisl fermentum, eu blandit orci dapibus. Integer ac sapien vel quam volutpat pharetra. Suspendisse potenti. Integer interdum ullamcorper purus, vel luctus purus malesuada eu. Nunc aliquet velit vel leo accumsan cursus. Etiam hendrerit quam id mauris cursus, at tincidunt justo fringilla.',
      published: '13/01/24'
    },
    { title: 'Between the Lines: Jean-Luc Godard\'s Art of Subtext in Cinema',
      id: 2,
      author: 'Mary Jane',
      preface: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada justo nec quam fermentum, ac laoreet urna euismod. Vestibulum at leo vel libero malesuada feugiat. Aliquam erat volutpat.',
      src: '/media/Vivre-Sa-Vie-Header.jpg',
      mainText: 'Proin ac augue vel elit cursus efficitur. Suspendisse ac sapien vel purus blandit cursus. Fusce dignissim, justo eget vulputate mattis, ex quam aliquam quam, sit amet tincidunt justo mauris ac purus. Ut quis erat a arcu ultricies rhoncus. Integer vel lectus vel nisl efficitur scelerisque. Curabitur fringilla libero et erat tincidunt, in egestas leo volutpat. Sed vitae enim vel justo vehicula interdum. Curabitur ultrices, velit nec pharetra commodo, felis turpis fringilla nunc, id euismod odio elit vitae libero. Vivamus auctor gravida ante eu efficitur. Curabitur at tortor et neque congue suscipit. Nullam feugiat risus vel urna dapibus, eu lacinia orci vulputate. \n\n Quisque in massa nec mi dignissim volutpat. Morbi euismod, felis at fermentum fermentum, mauris justo dictum nisi, id fringilla libero dui ut felis. Vivamus ullamcorper, sem ac congue vestibulum, nulla quam viverra turpis, in rhoncus mi libero nec elit. Praesent eu arcu nec justo tristique facilisis. Suspendisse id metus in ligula bibendum tristique. Sed dapibus metus eu arcu congue, vitae bibendum orci finibus. Aenean sit amet metus quis orci sodales vestibulum. Integer eu justo in elit sodales tincidunt id eu dui. Vivamus non fringilla leo. Sed rhoncus velit vel nisl fermentum, eu blandit orci dapibus. Integer ac sapien vel quam volutpat pharetra. Suspendisse potenti. Integer interdum ullamcorper purus, vel luctus purus malesuada eu. Nunc aliquet velit vel leo accumsan cursus. Etiam hendrerit quam id mauris cursus, at tincidunt justo fringilla.',
      published: '13/01/99'
    },
    { title: 'Michelangelo Antonioni\'s Landscapes of Emptiness: Unraveling the Aesthetics of Alienation',
      id: 3,
      author: 'John Doe',
      preface: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada justo nec quam fermentum, ac laoreet urna euismod. Vestibulum at leo vel libero malesuada feugiat. Aliquam erat volutpat.',
      src: '/media/Red-Desert-Header.jpeg',
      mainText: 'Proin ac augue vel elit cursus efficitur. Suspendisse ac sapien vel purus blandit cursus. Fusce dignissim, justo eget vulputate mattis, ex quam aliquam quam, sit amet tincidunt justo mauris ac purus. Ut quis erat a arcu ultricies rhoncus. Integer vel lectus vel nisl efficitur scelerisque. Curabitur fringilla libero et erat tincidunt, in egestas leo volutpat. Sed vitae enim vel justo vehicula interdum. Curabitur ultrices, velit nec pharetra commodo, felis turpis fringilla nunc, id euismod odio elit vitae libero. Vivamus auctor gravida ante eu efficitur. Curabitur at tortor et neque congue suscipit. Nullam feugiat risus vel urna dapibus, eu lacinia orci vulputate. \n\n Quisque in massa nec mi dignissim volutpat. Morbi euismod, felis at fermentum fermentum, mauris justo dictum nisi, id fringilla libero dui ut felis. Vivamus ullamcorper, sem ac congue vestibulum, nulla quam viverra turpis, in rhoncus mi libero nec elit. Praesent eu arcu nec justo tristique facilisis. Suspendisse id metus in ligula bibendum tristique. Sed dapibus metus eu arcu congue, vitae bibendum orci finibus. Aenean sit amet metus quis orci sodales vestibulum. Integer eu justo in elit sodales tincidunt id eu dui. Vivamus non fringilla leo. Sed rhoncus velit vel nisl fermentum, eu blandit orci dapibus. Integer ac sapien vel quam volutpat pharetra. Suspendisse potenti. Integer interdum ullamcorper purus, vel luctus purus malesuada eu. Nunc aliquet velit vel leo accumsan cursus. Etiam hendrerit quam id mauris cursus, at tincidunt justo fringilla.',
      published: '13/01/11'
    }
  ]
  
  return (
    <section className="w-full">
      <PageHeading>Articles</PageHeading>
      <ArticleSearch />
      <ul className="flex flex-col gap-4">
        {articleData.map(article => {
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
      <Outlet />
    </section>
  )
}

export default ArticlesList