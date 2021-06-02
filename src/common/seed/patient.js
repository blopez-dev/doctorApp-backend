import faker from 'faker';
import PatientService from "@Domain/patients/services";

const { phone, internet, address, name } = faker;

const patients = new Array(10).fill(null).map((patient, index) => ({
  name: name.findName(),
  email: internet.email(),
  phone: phone.phoneNumber(),
  address: address.streetAddress(),
}));

const seedPatients = () => PatientService().createMany(patients);

export default seedPatients;
