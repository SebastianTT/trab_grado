//modulo de reserva
module.exports = (sequelize,DataTypes) => {
    let reserva = sequelize.define('reserva',{
        res_num : DataTypes.STRING,
        res_hora_ini: DataTypes.TIME,
        res_hora_fin: DataTypes.TIME,
        res_fecha: DataTypes.DATE
    });

    reserva.associate = function (models) {
        reserva.belongsTo(models.sala,{
            onDelete : "CASCADE",
            foreignKey : 'res_id_sal' 
        });
    };

    reserva.associate = function (models) {
        reserva.hasMany(models.profesor,{
            onDelete : "CASCADE",
            foreignKey : 'res_id_usu' 
        });
    };

    reserva.associate = function (models) {
        reserva.belongsTo(models.materia,{ //muchos profesores pueden tener un usuario
            onDelete : "CASCADE",
            foreignKey : 'res_id_mat' //clave foránea con usuarios
        });
    };



    return reserva;
}