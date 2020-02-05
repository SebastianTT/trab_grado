//modulo de profesor
module.exports = (sequelize,DataTypes) => {
    let profesor = sequelize.define('profesor',{
        prof_nombre : DataTypes.STRING,
        prof_apellidos: DataTypes.STRING,
        prof_codigo: DataTypes.STRING,
        prof_password: DataTypes.STRING,
        prof_correo: DataTypes.STRING,
        prof_telefono: DataTypes.STRING
    });

    profesor.associate = function (models) {
        profesor.hasMany(models.reserva,{ //muchos profesores pueden tener un usuario
            onDelete : "CASCADE",
            foreignKey : 'res_id_usu',
            as: 'reserva'  //clave foránea con usuarios
        });
    };

    return profesor;
}