/*
 * Takes an object that represents the current state of the submittal flow
 * Returns the proper component to populate on DOM
 */

import * as app from "./settings";
import * as types from "../../../store/types";

// available options for component to return
type conditionalComponent =
  | "maintenanceTypes"
  | "location"
  | "facilitySelection"
  | "geoLocate"
  | "dataFields";

export default function displayComponent(
  state: types.newRequest,
  component: conditionalComponent
) {
  switch (state.requestType) {
    case "":
      return false;
    case "Maintenance Request":
      return app.config["Maintenance Request"][component];
    case "Office Move":
      return app.config["Office Move"][component];
    case "Construction":
      return app.config["Construction"][component];
  }
}
