import "./post.css";
function Msg(props) {
    return (
      <div className="post">
        <h3 className="post-titre" >{props.elem.titre}</h3>
        <p className="post-content">{props.elem.msg}</p>
        <div className="post-div-info">         
          <p className="post-auteur post-txt-blue">{props.elem.auteur}</p>
        </div>
      </div>
    );
  }
  export default Msg;
  