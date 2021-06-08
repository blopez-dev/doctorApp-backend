import chalk from 'chalk';
import { port } from '@Config/server';

export default (app) => app.listen(port, () => console.log(`Server is runing in ${chalk.magentaBright(` localhost:${port}`)}`));
