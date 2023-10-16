module.exports = (sequelize, Sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    name: { type: DataTypes.STRING, allowNull: false },
    phoneNumberList: { type: DataTypes.JSON, allowNull: false },
    emailList: { type: DataTypes.JSON, allowNull: true },
    dob: { type: DataTypes.STRING, allowNull: true },
  });

  return Contact;
};
