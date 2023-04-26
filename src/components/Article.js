const Article = ({ title, date, preview, minutes }) => {
    return (
      <div className="article">
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{preview}</p>
        <h4>{minutes} min read</h4>
      </div>
    );
  };
  
  export default Article;
  