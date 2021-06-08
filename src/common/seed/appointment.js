import date from 'dayjs';
import AppointmentService from "@Domain/appointments/services/index";

const appointments = (patients, users, rooms) => new Array(10).fill(null).map((data, index) => ({
  startTime: date(new Date()).hour(6).add(index + 1, 'hour'),
  endTime: date(new Date()).hour(6).add(index + 2, 'hour'),
  patientId: patients[0].id,
  userId: users[0].id,
  roomId: index % 2 ? rooms[0].id : rooms[1].id,
}));

const seedAppointments = (patients, users, rooms) => AppointmentService().createMany(appointments(patients, users, rooms));

export default seedAppointments;
