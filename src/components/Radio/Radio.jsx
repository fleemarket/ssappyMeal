import { useContext } from "react";
import { RadioContext } from "./RadioContext";
import { Badge } from "../ui/badge";

export default function Radio({ children, value, name, defaultChecked, disabled }) {
  const group = useContext(RadioContext);
  return (
    <label className="mr-2">
      <Badge className="text-md cursor-pointer" variant={group.value === value ? "badge" : "off"}>
      <input
        type="radio"
        value={value}
        id={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
        hidden
      />
      {children}
      </Badge>
    </label>
  );
}