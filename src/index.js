import React, { useState } from "react";
import ReactDOM from "react-dom";
import ControlledExample from "./controlled";
import UncontrolledExample from "./uncontrolled";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import Switch from "carbon-react/lib/components/switch";

function App() {
  const [controlledState, setControlledState] = useState(true);

  return (
    <CarbonProvider>
      <div>
        ON === Controlled
        <br></br>
        OFF === Uncontrolled
        <Switch
          m={4}
          label="Controlled/Uncontrolled"
          name="controlled-state-switch"
          checked={controlledState}
          onChange={(e) => setControlledState(e.target.checked)}
        />
      </div>
      <div>
        {controlledState ? <ControlledExample /> : <UncontrolledExample />}
      </div>
    </CarbonProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
