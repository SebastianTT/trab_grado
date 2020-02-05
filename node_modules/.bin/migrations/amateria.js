//atributos de la tabla materia
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('materia', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        mat_nombre: {
          type: Sequelize.STRING(20),
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('materia'),
};