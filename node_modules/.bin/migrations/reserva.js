//atributos tabla reserva
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('reserva', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        res_hora_ini: {
          type: Sequelize.TIME,
         
        },
        res_hora_fin: {
          type: Sequelize.TIME,

        },
        res_id_sal: {
          type: Sequelize.INTEGER,
          onDelete : 'CASCADE',
          references:{
              model: 'sala',
              key: 'id',
              as: 'res_id_usu'
          }
         
        },
        res_fecha: {
          type: Sequelize.DATE,
         
        },
        res_id_usu:{
          type: Sequelize.INTEGER,
          onDelete : 'CASCADE',
          references:{
              model: 'usuario',
              key: 'id',
              as: 'res_id_usu'
          }
        },
        res_id_mat:{
          type: Sequelize.INTEGER,
          onDelete : 'CASCADE',
          references:{
              model: 'materia',
              key: 'id',
              as: 'res_id_mat'
          }
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