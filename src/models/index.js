const Users = require('./userModel');
const Patient = require('./patientModel');
const Examination = require('./examinationModel');
const Analysis = require('./analysisModel');

// Relasi User (1) - (M) Patient
Users.hasMany(Patient, {
    foreignKey: {
        name: 'NIP',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Patient.belongsTo(Users, {
    foreignKey: 'NIP'
});

// Relasi Patient (1) - (M) Examination
Patient.hasMany(Examination, {
    foreignKey: {
        name: 'pasien_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Examination.belongsTo(Patient, {
    foreignKey: 'pasien_id'
});

// Relasi Examination (1) - (M) Analysis
Examination.hasMany(Analysis, {
    foreignKey: {
        name: 'pemeriksaan_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Analysis.belongsTo(Examination, {
    foreignKey: 'pemeriksaan_id'
});

module.exports = {
    Users,
    Patient,
    Examination,
    Analysis
};