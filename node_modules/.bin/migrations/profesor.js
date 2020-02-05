//atributos tabla profesor
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('usuario', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        usu_nombre: {
          type: Sequelize.STRING(10),
         
        },
        usu_apellidos: {
          type: Sequelize.STRING(15),
         
        },
        usu_codigo: {
          type: Sequelize.STRING(12),
         
        },
        usu_password: {
          type: Sequelize.STRING(150),
         
        },
        usu_correo: {
          type: Sequelize.STRING(30),
         
        },
        usu_telefono: {
          type: Sequelize.STRING(15),
         
        },
        rol:{
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        },
        updatedAt: {
          type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        }
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('profesor'),
  };