//atributos de la tabla sala
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('sala', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sal_nombre: {
          type: Sequelize.STRING(15),
        },
        sal_ubicacion: {
          type: Sequelize.STRING(10),
        },
        sal_estado: {
          type: Sequelize.STRING(8),
        },
        sal_num_equ: {
          type: Sequelize.STRING(8),
        },
        createdAt: {
          type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        }
       
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('sala'),
};