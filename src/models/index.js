const Patient = require('./patientModel');
const Examination = require('./examinationModel');
const Analysis = require('./analysisModel');
const Users = require('./userModel');

// Relasi: Pasien dimiliki oleh User (dokter/tenaga kesehatan)
Patient.belongsTo(Users, { foreignKey: 'NIP' });
Users.hasMany(Patient, { foreignKey: 'NIP' });

// Relasi: Pemeriksaan dimiliki oleh Pasien
Examination.belongsTo(Patient, { foreignKey: 'pasien_id', as: 'pasiens' });
Patient.hasMany(Examination, { foreignKey: 'pasien_id', as: 'pemeriksaans' });

// Relasi: Hasil Analisis dimiliki oleh Pemeriksaan
Analysis.belongsTo(Examination, { foreignKey: 'pemeriksaan_id' });
Examination.hasOne(Analysis, { foreignKey: 'pemeriksaan_id', as: 'hasil_analises' });

module.exports = {
    Patient,
    Examination,
    Analysis,
    Users
};