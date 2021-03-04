import "./formulaireContact.css";

import {Form, Col, Button} from "react-bootstrap";

import { useState } from "react";

function FormulaireContact(props) {
    
    let [newMsg, setMsg] = useState( getMsgVide());//useState({ }); 
    
    function getMsgVide() {
        return {
          titre: "",
          msg: "",          
          auteur: ""
        };
      }

    function onChange(ev) {
        setMsg({ ...newMsg, [ev.target.name]: ev.target.value });
    } 

    function  onSend() {
        props.onSend(newMsg);  
        setMsg( getMsgVide());
    }

    return (
        <div>
        <Form className="msg-container bg-dark text-white text-left">
            <h4 className="text-center">Ecrivez - nous</h4>
            <Form.Group>
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text"  className="msg-titre" name="titre" onChange={onChange}  value={newMsg.titre}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Votre message</Form.Label>
                <Form.Control as="textarea" rows={3}  className="msg-content"  name="msg" onChange={onChange}  value={newMsg.msg}/>
            </Form.Group>
            <Form.Row>
                <Col xs={7}>
                    <Form.Group>
                        <Form.Label>Auteur</Form.Label>
                        <Form.Control type="text" className="msg-auteur" name="auteur" onChange={onChange}  value={newMsg.auteur} />
                    </Form.Group>
             </Col>
            </Form.Row>
            <Button variant="light" onClick={onSend}>  Envoyer</Button>
        </Form>
        </div>
    );
}
export default FormulaireContact;


 