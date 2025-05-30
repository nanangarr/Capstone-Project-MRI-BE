const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Analysis = db.define('hasil_analisis', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hasil_prediksi: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    probabilitas: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status_risiko: {
        type: DataTypes.ENUM('Rendah', 'Sedang', 'Tinggi'),
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Analysis;