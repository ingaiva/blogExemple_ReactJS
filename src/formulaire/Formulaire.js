import "./formulaire.css";

import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import { useState } from "react";

function Formulaire(props) {
  let [newArt, setArt] = useState(getPostVide()); //useState({}); 

  function onChange(ev) {
    setArt({ ...newArt, [ev.target.name]: ev.target.value });
  }

  function onBtnClick(ev) {    
    setArt(getPostVide());
    props.onclck(newArt);
  } 

  function getPostVide() {
    return {
      titre: "",
      content: "",
      date: "",
      auteur: ""
    };
  }

  return (
    <div>
      <Form className="post bg-light text-left">
        <h3 className="text-center">Nouveau post</h3>
        <Form.Group controlId="frmNpTitre">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            type="text"
            className="post-titre"
            placeholder="Titre"
            name="titre"
            onChange={onChange}
            value={newArt.titre}
          />
        </Form.Group>
        <Form.Group controlId="frmNpArticle">
          <Form.Label>Article</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="post-content"
            placeholder="Article"
            name="content"
            onChange={onChange}
            value={newArt.content}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="frmNpDatee">
            <Form.Label className="post-txt-blue">Date</Form.Label>
            <Form.Control
              type="date"
              className="post-date post-txt-blue"
              placeholder="date"
              name="date"
              onChange={onChange}
              value={newArt.date}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="frmNpAuteur">
            <Form.Label className="post-txt-blue">Auteur</Form.Label>
            <Form.Control
              type="text"
              className="post-auteur post-txt-blue"
              placeholder="Auteur"
              name="auteur"
              onChange={onChange}
              value={newArt.auteur}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="Button" onClick={onBtnClick}>
          Envoyer
        </Button>
      </Form>
    </div>
  );
}
export default Formulaire;





 // let [etatArticle, setArticle] = useState("");
  // let [etatTitre, setTitre] = useState("");
  // let [etatDate, setDate] = useState("");
  // let [etatAuteur, setAuteur] = useState("");

  // function onChangeTitre(ev) {
  //   setTitre(ev.target.value);
  // }
  // function onChangeArt(ev) {
  //   setArticle(ev.target.value);
  // }
  // function onChangeDate(ev) {
  //   setDate(ev.target.value);
  // }
  // function onChangeAuteur(ev) {
  //   setAuteur(ev.target.value);
  // }