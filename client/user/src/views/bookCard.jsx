import React from 'react';
import { Link } from 'react-router-dom';

 

const MovieCard = ({ movie: {id, bookname, summary, availability } }) => {
  const redirect=()=>{
    window.Location.href="/bookapply"
  }
  return (
<Link to={`/bookapply/${id}`}>
<div className="movie" onClick={()=>redirect()}>
<div>
<p>{availability}</p>
</div>

 

        <div>
<img src={"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930"} alt={bookname} />
</div>

 

        <div>
<h3>{bookname}</h3>
<span>{summary}</span>
</div>
</div>
</Link>
  );
}

 

export default MovieCard;