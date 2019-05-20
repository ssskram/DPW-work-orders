import * as React from "react";
import * as types from "../../../store/types";
import * as constants from "./constants";

type props = {
  newRequest: types.newRequest;
  updateRequest: (newData: object) => void;
};

export default class RequestTypes extends React.Component<props, {}> {
  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          {constants.requestTypes.map(type => {
            return (
              <div className="col-md-6">
                <button
                  className="btn btn-secondary"
                  style={
                    type.value == this.props.newRequest.requestType
                      ? constants.buttonClicked
                      : constants.buttonWidth
                  }
                  onClick={() =>
                    this.props.updateRequest({ requestType: type.value })
                  }
                >
                  <h2 className="oswald">{type.label}</h2>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
