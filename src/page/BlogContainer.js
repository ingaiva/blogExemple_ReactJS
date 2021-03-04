import "./blogContainer.css";
import Post from "../post/Post";
import Form from "../formulaire/Formulaire";
import FormContact from "../formulaireContact/FormulaireContact";
import Msg from "../post/Msg";
import { useState } from "react";

function BlogContainer(props) {
  
  let art1 =
    "Des millions de sites internet sont crées tout les mois. " +
    "Et nous ne sommes plus en 1998, les utilisateurs veulent une expérience dynamique et un site compréhensible. " +
    "Javascript nous permets de faire tout ça. " +
    "Il est possible de faire des animations, de gérer les actions des utilisateurs, de créer des expériences en temps réel, ou même de recharger uniquement certaines parties d’une page. " +
    "Vous devez comprendre, un site web moderne ne peux pas fonctionner sans javascript. " +
    "Si vous êtes développeur web ou aspirant développeur , vous devez apprendre le javascript";
  let art2 =
    "La première protestation que l’on entends c’est “et si je suis développeur backend ? ” Et bien il y a deux bonnes raisons qui devraient vous pousser à apprendre le javascript. D’abord, même si vous êtes dev backend, si vous ne comprenez pas ce qui se passe du côté du frontend, vous êtes cuits. " +
    "Ces deux parties d’un site web communiquent constamment. Si vous êtes incapable de lire l’autre partie du code, vous allez avoir beaucoup de mal à faire un site correct. " +
    "Dans ce cas-ci, vous n’avez pas à être un maître du Javascript. Bossez-le quelques heures uniquement pour comprendre la syntaxe et ce que le code signifie, cela vous aideras grandement." +
    "Ensuite, si vous êtes développeur backend, apprendre le javascript vous permettras de devenir développeur fullstack. " +
    "Fullstack signifie que vous pouvez à la fois programmer le backend et le frontend. C’est une compétence très recherchée." +
    "Les petites entreprises nottamment n’ont pas les moyens d’embaûcher deux développeurs. Devenir fullstack c’est donc un bon moyen de trouver plus de travail et d’augmenter son salaire." +
    "Ensuite, si vous êtes entrepreneur ou que vous avez des projets perso. Vous n’avez pas le choix." +
    "Vous devez absolument maîtriser javascript pour créer un site correct.";
  let art3 =
    "Les développeurs logiciels ne voient probablement pas l’intérêt d’apprendre le Javascript. Pourtant, comme je l’ai plus tôt , il existe Node JS" +
    "  C’est en fait un nouveau langage de programmation qui est basé sur javascript. Un peu comme python, il permets de créer des scripts, ou même des logiciels programmés en javascript HTML et CSS grâce à electron" +
    "  Si vous travaillez avec des langages comme Python, apprendre Node JS ne peux être qu’une bonne idée." +
    "  En plus de cela, Node JS est beaucoup utilisé dans le développement de site web. Donc, si vous maîtrisez Node JS, vous pourrez créer des sites web. Et donc faire aussi du front end. En somme vous pourrez devenir un développeur fullstack." +
    "  Beaucoup de développeurs Node JS savent créer des sites internets même si ils ne le font presque jamais. Puisqu’ils maîtrisent Javascript classique et un langage de programmation backend qui s’avère aussi être Javascript. Ils peuvent créer un site web avec un seul langage de programmation , génial non ?" +
    "  Node JS est au final une bonne raison d’apprendre le Javascript.";

  let lstPostInitial = [
    {
      titre: "Le développement web",
      content: art1,
      date: "9 mai 2019",
      auteur: "Redkire",
    },
    {
      titre: "Les développeurs backend",
      content: art2,
      date: "6 juin 2020",
      auteur: "Redkire",
    },
    {
      titre: "Le développement logiciel",
      content: art3,
      date: "20 septembre 2020",
      auteur: "Redkire",
    },
  ];

  let [lstPost, setStatePosts] = useState(lstPostInitial);  
  let [lstMsg, setStateMsg]=useState([]);
  
  const onAddPost = function (newArticle) {    
    setStatePosts([...lstPost, newArticle]);   
  };
  
  const onSendContact = function (newMsg) {      
    setStateMsg([...lstMsg, newMsg]);   
  };
  
  function renderMsg() {     
    return lstMsg.map((element) => <Msg elem={element} />);
  };
  
  function renderPosts() {
    return lstPost.map((element) => <Post article={element} />);
  };

  return (
    <div>
      <h3>Pourquoi apprendre Javascript</h3>
      {renderPosts()}
      <Form onclck={onAddPost} />
      <FormContact onSend={onSendContact}/>
      {renderMsg()}
    </div>
  );
}

export default BlogContainer;





























// return <Post titre={element.titre}  content={element.content}  date={element.date} auteur={element.auteur} />

// const items = [];
// lstPost.forEach(element => {
//   items.push(<Post titre={element.titre}  content={element.content}  date={element.date} auteur={element.auteur} />)
// });

{
  /* {items} */
}

{
  /* {lstPost.map((element, index) => {
        return <Post titre={element.titre}  content={element.content}  date={element.date} auteur={element.auteur} />
      })} */
}

// let articles = new Array(art1, art2, art3);
{
  /* <Post
titre="Le développement web"
content={contents[0]}
date="9 mai 2019"
auteur="Redkire"
/>
<Post
titre="Les développeurs backend"
content={contents[1]}
date="6 juin 2020"
auteur="Redkire"
/>
<Post
titre="Le développement logiciel"
content={contents[2]}
date="20 septembre 2020"
auteur="Redkire"
/> */
}
