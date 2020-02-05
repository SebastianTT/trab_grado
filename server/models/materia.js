//modulo de materias
module.exports = (sequelize,DataTypes) => {
    let materia = sequelize.define('materia',{
        mat_nombre : DataTypes.STRING
    });

    materia.associate = function (models) {
        materia.hasMany(models.reserva,{ 
            foreignKey : 'res_id_mat',
            as: 'reserva' 
        });
    };
    return materia;
}