import seedPatients from "@Common/seed/patient";

const Seed = async () => {
  try {
    await seedPatients();
  } catch(err) {
    console.log(err)
  }

};

export default Seed;
