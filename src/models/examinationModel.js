const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Examination = db.define('pemeriksaan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tanggal_periksa: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    detak_jantung: {
        type: DataTypes.INTEGER
    },
    diabetes: {
        type: DataTypes.BOOLEAN
    },
    kolesterol: {
        type: DataTypes.FLOAT
    },
    gambar_MRI: DataTypes.STRING
}, {
    timestamps: true
});

module.exports = Examination;