const ArticleList = () => {
    return ( 
        <div className="article-List">
            {posts.map(t => (
          <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
        ))}
        </div>
     );
}
 
export default ArticleList;