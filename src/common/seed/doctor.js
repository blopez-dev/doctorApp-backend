import faker from 'faker';
import UserService from "@Domain/user/services/index";

const { phone, internet, address, name, lorem } = faker;

const users = new Array(10).fill(null).map(() => ({
  name: name.findName(),
  email: internet.email(),
  phone: phone.phoneNumber(),
  address: address.streetAddress(),
  description: lorem.words()
}));

const seedUsers = () => UserService().createMany(users);

export default seedUsers;
