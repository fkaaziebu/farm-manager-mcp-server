import { getAlerts } from './get-alerts.tool';
import { getForecast } from './get-forecast.tool';

export const tools = [getAlerts(), getForecast()];
