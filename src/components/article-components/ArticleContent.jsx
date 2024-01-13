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
        <br />
        <br />
        Quisque in massa nec mi dignissim volutpat. Morbi euismod, felis at fermentum fermentum, mauris justo dictum nisi, id fringilla libero dui ut felis. Vivamus ullamcorper, sem ac congue vestibulum, nulla quam viverra turpis, in rhoncus mi libero nec elit. Praesent eu arcu nec justo tristique facilisis. Suspendisse id metus in ligula bibendum tristique. Sed dapibus metus eu arcu congue, vitae bibendum orci finibus. Aenean sit amet metus quis orci sodales vestibulum. Integer eu justo in elit sodales tincidunt id eu dui. Vivamus non fringilla leo. Sed rhoncus velit vel nisl fermentum, eu blandit orci dapibus. Integer ac sapien vel quam volutpat pharetra. Suspendisse potenti. Integer interdum ullamcorper purus, vel luctus purus malesuada eu. Nunc aliquet velit vel leo accumsan cursus. Etiam hendrerit quam id mauris cursus, at tincidunt justo fringilla.
      </ArticleMain>
      <ArticleFooter>
        Published - 11/01/24
      </ArticleFooter>
    </div>
  )
}

export default ArticleContent