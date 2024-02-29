import { RadioContext } from "./RadioContext";

export default function RadioGroup({ children, ...rest }) {
  return (
    <fieldset>
      <RadioContext.Provider value={rest} >{children}</RadioContext.Provider>
    </fieldset>
  );
}