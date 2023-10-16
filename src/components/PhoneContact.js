import axios from "axios";
import React, { useState } from "react";
import { ListGroupItem, Button } from "reactstrap";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
const PhoneContact = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const handleDelete = async (itemId) => {
    const apiUrl = `/api/v1/contact/delete/${itemId}`;

    //  const dataToDelete = { itemId };

    const res = await axios.post(apiUrl);
    console.log(res.data);
  };

  const updateContact = async (formData, prop) => {
    const apiUrl = `/api/v1/contact/update/${props.id}`;
    // console.log({
    //   name: formData.name,
    //   phoneNumberList: formData.phoneNumber,
    //   emailList: formData.email,
    //   dob: formData.dob,
    // });

    const res = await axios.post(apiUrl, {
      name: formData.name,
      phoneNumberList: formData.phoneNumber,
      emailList: formData.email,
      dob: formData.dob,
    });
    console.log(res);
  };

  const [formData, setFormData] = useState({
    name: props.name,
    emails: props.email.join(","),
    phoneNumbers: props.phoneNumber.join(","),
    dob: props.dob,
  });
  console.log(formData);
  console.log(props);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ListGroupItem>
      <div className="contact-name-surname">
        <h4>{props.name}</h4>
        <i className="fa fa-phone" aria-hidden="true"></i>
        <h6 className="contact-number">{props.phoneNumber}</h6>
        <h6 className="contact-number">{props.email}</h6>
        <h6 className="contact-number">{props.dob}</h6>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update contact</ModalHeader>
        <ModalBody>
          <Form method="post">
            <FormGroup>
              <Input
                type="text"
                className="contact-data"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                autoComplete="none"
              />
              <Input
                type="text"
                className="contact-data"
                name="emails"
                value={formData.emails}
                onChange={handleInputChange}
                placeholder="Email (Seperate multiple by comma's)"
                autoComplete="none"
              />
              <Input
                type="text"
                className="contact-data"
                name="phoneNumbers"
                value={formData.phoneNumbers}
                onChange={handleInputChange}
                placeholder="Phone Number (Seperate multiple by comma's)"
              />
              <Input
                type="text"
                className="contact-data"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Date of Birth"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => updateContact(formData, props.id)}
          >
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Button
        color="danger"
        className="update-contact"
        onClick={() => handleDelete(props.id)}
      >
        <h6>Delete</h6>
      </Button>

      <Button className="remove-contact" onClick={toggle}>
        <h6>Update</h6>
      </Button>
    </ListGroupItem>
  );
};

export default PhoneContact;
