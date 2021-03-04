import "./post.css";

function Post(props) {
  return (
    <div className="post">
      <h3 className="post-titre">{props.article.titre}</h3>
      <p className="post-content">{props.article.content}</p>
      <div className="post-div-info">
        <p className="post-date post-txt-blue">{props.article.date}</p>
        <p className="post-auteur post-txt-blue">{props.article.auteur}</p>
      </div>
    </div>
  );
}
export default Post;

// function Post(props){
//     return (
//         <div className="post">
//             <h3 className="post-titre">{props.titre}</h3>
//             <p  className="post-content">{props.content}</p>
//             <div  className="post-div-info">
//                 <p className="post-date post-txt-blue">{props.date}</p>
//                 <p className="post-auteur post-txt-blue">{props.auteur}</p>
//             </div>
//         </div>
//     );
// }
