import faker from 'faker';
import PatientService from "@Domain/patients/services";

const { name ,internet, phone, address} = faker;

const patients = new Array(150).fill(null).map((patient, index) => ({
  name: name.findName(),
  email: internet.email(),
  phone: phone.phoneNumber(),
  address: address.streetAddress(),
  clinicalHistory: [{
    patology: 'Covid 19'
  }]
}));

const seedPatients = () => PatientService().createMany(patients);

export default seedPatients;
