module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      skills: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };