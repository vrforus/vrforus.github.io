import { init } from 'insights-js';

class Insights {
  constructor() {
    init(process.env.INISGHTS_PROJECT_ID);
  }
}

export default Insights;
