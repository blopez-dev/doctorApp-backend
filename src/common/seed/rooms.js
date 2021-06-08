import RoomService from "@Domain/rooms/services";

const rooms = new Array(5).fill(null).map((room, index) => ({
  name: 'Consulta ' + (index + 1),
}));

const seedRooms = () => RoomService().createMany(rooms);

export default seedRooms;
