import seedPatients from "@Common/seed/patient";
import seedUsers from "@Common/seed/doctor";

const Seed = async () => {
  try {
    await seedPatients();
    await seedUsers();
  } catch(err) {
    console.log(err)
  }

};

export default Seed;
