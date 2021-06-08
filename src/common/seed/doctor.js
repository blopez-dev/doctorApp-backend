import faker from 'faker';
import UserService from "@Domain/user/services/index";


const { name, internet, image, phone, address, lorem } = faker;

const users = new Array(50).fill(null).map(() => ({
  name: name.findName(),
  email: internet.email(),
  avatar: image.image(),
  phone: phone.phoneNumber(),
  address: address.streetAddress(),
  description: lorem.words()
}));

const seedUsers = () => UserService().createMany(users);

export default seedUsers;
