module.exports = function (sequelize, DataTypes){
  const Record = sequelize.define("Record", {
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quality: {
      type: DataTypes.STRING,
      allowNull: false}
  });
  return Record;
};