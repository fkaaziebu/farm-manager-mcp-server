import { getAlerts } from './get-alerts.tool';
import { getForecast } from './get-forecast.tool';
import { getFarmSummary } from './get-farm-summary';
import { getAnimalForecast } from './get-animal-forcast';
import { classifyLeafDisease } from './classify-leaf-disease';

export const tools = [
  getAlerts(),
  getForecast(),
  getFarmSummary(),
  getAnimalForecast(),
  classifyLeafDisease(),
];
