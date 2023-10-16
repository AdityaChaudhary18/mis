import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import Header from "../components/Header";
import PhoneContactsList from "../components/PhoneContactsList";
import Search from "../components/Search";
import { useState } from "react";
import axios from "axios";

function PhoneBook() {
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    emails: "",
    phoneNumbers: "",
    dob: "",
  });
  const toggle = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitNewContact = async (e) => {
    const emailList = formData.emails.split(",");
    const phoneNumberList = formData.phoneNumbers.split(",");
    e.preventDefault();
    console.log({
      ...formData,
      phoneNumberList: phoneNumberList,
      emailList: emailList,
    });
    const apiUrl = "/api/v1/contact/";
    await axios
      .post(apiUrl, {
        ...formData,
        phoneNumberList: phoneNumberList,
        emailList: emailList,
      })
      .then((response) => {
        // Handle the response as needed
        console.log("Data added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });

    console.log("Submitted");
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={{ size: 8, offset: 2 }} className="header">
          <Header />
        </Col>
      </Row>

      <Container className="all-contacts">
        <Row>
          <Col md={{ size: 8, offset: 2 }} className="phone-contact-field">
            <h3 className="phone-contacts">Contacts</h3>
            <div>
              <Button color="primary" onClick={toggle}>
                + Add Contact
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New contact</ModalHeader>
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
                  <Button color="primary" onClick={submitNewContact}>
                    Create
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
          <Search />
          <PhoneContactsList />
        </Row>
      </Container>
    </Container>
  );
}

export default PhoneBook;
