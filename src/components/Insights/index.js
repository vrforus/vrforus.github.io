import { init, trackPages } from 'insights-js';

class Insights {
  constructor() {
    init(process.env.INISGHTS_PROJECT_ID);
    trackPages();
  }
}

export default Insights;
