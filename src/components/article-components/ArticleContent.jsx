import ArticleFooter from "./ArticleFooter"
import ArticleHeaderImage from "./ArticleHeaderImage"
import ArticleHeadingContainer from "./ArticleHeadingContainer"
import ArticleMain from "./ArticleMain"
import ArticlePreface from "./ArticlePreface"

const ArticleContent = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#5e2424] p-4">
      <ArticleHeadingContainer>
        
      </ArticleHeadingContainer>
      <ArticlePreface>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada justo nec quam fermentum, ac laoreet urna euismod. Vestibulum at leo vel libero malesuada feugiat. Aliquam erat volutpat.
      </ArticlePreface>
      <ArticleHeaderImage />
      <ArticleMain>
        Proin ac augue vel elit cursus efficitur. Suspendisse ac sapien vel purus blandit cursus. Fusce dignissim, justo eget vulputate mattis, ex quam aliquam quam, sit amet tincidunt justo mauris ac purus. Ut quis erat a arcu ultricies rhoncus. Integer vel lectus vel nisl efficitur scelerisque. Curabitur fringilla libero et erat tincidunt, in egestas leo volutpat. Sed vitae enim vel justo vehicula interdum. Curabitur ultrices, velit nec pharetra commodo, felis turpis fringilla nunc, id euismod odio elit vitae libero. Vivamus auctor gravida ante eu efficitur. Curabitur at tortor et neque congue suscipit. Nullam feugiat risus vel urna dapibus, eu lacinia orci vulputate.
      </ArticleMain>
      <ArticleFooter>
        Published - 11/01/24
      </ArticleFooter>
    </div>
  )
}

export default ArticleContent