const { Contact } = require("../models");
const {
  successResponse,
  createdSuccessResponse,
  serverErrorResponse,
  notFoundResponse,
} = require("../../util/response");

exports.createContact = async (req, res) => {
  try {
    const { name, phoneNumberList, emailList, dob } = req.body;

    const contact = await Contact.create({
      name,
      phoneNumberList,
      emailList,
      dob,
    });

    return createdSuccessResponse(res, "Contact Successfully Created", contact);
  } catch (error) {
    console.log(error);
    return serverErrorResponse(res);
  }
};

exports.fetchAllContacts = async (req, res) => {
  try {
    console.log(Contact);
    const contact = await Contact.findAll();

    return successResponse(res, "Successfully fetched all contacts", contact);
  } catch (error) {
    console.log(error);
    return serverErrorResponse(res);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;

    const deletedContact = await Contact.destroy({
      where: { id: Number(contactId) },
    });

    if (!deletedContact) {
      return notFoundResponse(res, "Contact not found");
    }

    return successResponse(res, "Contact Successfully Deleted", deletedContact);
  } catch (error) {
    console.log(error);
    return serverErrorResponse(res);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { name, phoneNumberList, emailList, dob } = req.body;
    const data = { name, phoneNumberList, emailList, dob };
    const contactId = req.params.id;
    console.log(data);
    const updatedContact = await Contact.update(
      { data },
      { where: { id: Number(contactId) } }
    );

    if (!updatedContact) {
      return notFoundResponse(res, "Contact not found");
    }

    return successResponse(res, "Contact Successfully Updated", updatedContact);
  } catch (error) {
    console.log(error);
    return serverErrorResponse(res);
  }
};
