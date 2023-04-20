const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    ccn3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    flags: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
    {timestamps: false}
  );
};
