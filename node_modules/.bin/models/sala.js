//modulo de salas
module.exports = (sequelize,DataTypes) => {
    let sala = sequelize.define('sala',{
        sal_nombre : DataTypes.STRING,
        sal_ubicacion: DataTypes.STRING,
        sal_estado: DataTypes.STRING,
        sal_num_equ: DataTypes.STRING
    });

    sala.associate = function (models) {
        sala.hasMany(models.reserva,{ 
            foreignKey : 'res_id_sal',
            as: 'reserva' 
        });
    };

    return sala;
}