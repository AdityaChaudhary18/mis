import axios from "axios";
import React from "react";
import { ListGroupItem, Button } from "reactstrap";

const PhoneContact = (props) => {
  const handleDelete = async (itemId) => {
    const apiUrl = `/api/v1/contact/delete/${itemId}`;

    //  const dataToDelete = { itemId };

    const res = await axios.post(apiUrl);
    console.log(res.data);
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
      <Button
        color="danger"
        className="remove-contact"
        onClick={() => handleDelete(props.id)}
      >
        <h6>Delete</h6>
      </Button>
    </ListGroupItem>
  );
};

export default PhoneContact;
