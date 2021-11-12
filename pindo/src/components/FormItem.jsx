import React from "react";
import Error from "./Error";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";
import TextInput from "./TextInput";
import CitySelector from "./CitySelector";
import FormType from "../constants/FormType";

function FormItem({ type, options, error, ...props }) {
  return (
    <div data-testid={`form-item-${props.name}`}>
      {
        // render Components here
        (type === FormType.TEXT && <TextInput {...props} />) ||
          (type === FormType.TEXTAREA && <Textarea {...props} />) ||
          (type === FormType.DROPDOWN && (
            <Dropdown {...props} options={options} />
          )) ||
          (type === FormType.CHECKBOX && <Checkbox {...props} />) ||
          (type === FormType.CHECKBOX && <CitySelector {...props} />)
      }
      {
        // render error if exists here
        error && <Error name={props.name} error={error} />
      }
    </div>
  );
}

export default FormItem;
