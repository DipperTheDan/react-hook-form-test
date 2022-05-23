import React from "react";
import ReactDOM from "react-dom";
import ControlledExample from "./controlled";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";

function App() {
  return (
    <CarbonProvider>
      <div>
        <ControlledExample />
      </div>
    </CarbonProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
