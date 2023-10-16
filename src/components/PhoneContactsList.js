import React, { useEffect, useState } from "react";
import { ListGroup } from "reactstrap";
import PhoneContact from "./PhoneContact";
import axios from "axios";

const PhoneContactsList = ({
  filteredData,
  setFilteredData,
  contactData,
  setContactData,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/v1/contact");
      setFilteredData(res.data.data);
      setContactData(res.data.data);
      setLoading(false);
    })();
  }, []);
  console.log(filteredData);
  let results = filteredData?.map((contact, i) => {
    return (
      <PhoneContact
        name={contact.name}
        phoneNumber={contact.phoneNumberList}
        email={contact.emailList}
        dob={contact.dob}
        id={contact.id}
        key={i}
      />
    );
  });

  return loading ? <h1>Loading</h1> : <ListGroup>{results}</ListGroup>;
};

export default PhoneContactsList;
