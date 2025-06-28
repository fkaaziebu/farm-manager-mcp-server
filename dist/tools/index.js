"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tools = void 0;
const get_alerts_tool_1 = require("./get-alerts.tool");
const get_forecast_tool_1 = require("./get-forecast.tool");
const get_farm_summary_1 = require("./get-farm-summary");
const get_animal_forcast_1 = require("./get-animal-forcast");
const classify_leaf_disease_1 = require("./classify-leaf-disease");
exports.tools = [
    (0, get_alerts_tool_1.getAlerts)(),
    (0, get_forecast_tool_1.getForecast)(),
    (0, get_farm_summary_1.getFarmSummary)(),
    (0, get_animal_forcast_1.getAnimalForecast)(),
    (0, classify_leaf_disease_1.classifyLeafDisease)(),
];
//# sourceMappingURL=index.js.map