import React, { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "./Header";
import Pod from "carbon-react/lib/components/pod";
import Textbox from "carbon-react/lib/components/textbox";
import Textarea from "carbon-react/lib/components/textarea";
import ButtonToggle from "carbon-react/lib/components/button-toggle";
import ButtonToggleGroup from "carbon-react/lib/components/button-toggle-group";
import GroupedCharacter from "carbon-react/lib/components/grouped-character";
import Decimal from "carbon-react/lib/components/decimal";
import {
  Select,
  MultiSelect,
  Option,
} from "carbon-react/lib/components/select";
import { Checkbox } from "carbon-react/lib/components/checkbox";
import Switch from "carbon-react/lib/components/switch";
import {
  RadioButton,
  RadioButtonGroup,
} from "carbon-react/lib/components/radio-button";
import {
  SimpleColorPicker,
  SimpleColor,
} from "carbon-react/lib/components/simple-color-picker";
import Form from "carbon-react/lib/components/form";
import Button from "carbon-react/lib/components/button";
import Number from "carbon-react/lib/components/number";

// Date cannot be uncontrolled in its current implementation
// import Date from "carbon-react/lib/components/date";
// import DateRange from "carbon-react/lib/components/date-range";

let renderCount = 0;

const defaultValues = {
  CarbonSelect: "",
  CarbonMultiSelect: [],
  CarbonTextbox: "",
  CarbonTextarea: "",
  CarbonGroupedCharacter: "",
  CarbonNumber: "",
  CarbonDecimal: "",
  CarbonDate: "",
  CarbonDateRange: ["", ""],
  CarbonCheckbox: false,
  CarbonSwitch: false,
  CarbonRadioButtons: "",
  CarbonButtonToggleGroup: "",
  CarbonSimpleColorPicker: "",
};

function UncontrolledExample() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onBlur" });
  const [data, setData] = useState(null);
  const [clearFormOnSubmit, setClearFormOnSubmit] = useState(false);

  renderCount++;

  const resetForm = useCallback(() => {
    reset(data); // asynchronously reset your form values
  }, [reset]);

  return (
    <Form
      leftSideButtons={
        <Button onClick={() => console.log("cancel")}>Cancel</Button>
      }
      saveButton={
        <Button buttonType="primary" type="submit">
          Save
        </Button>
      }
      onSubmit={handleSubmit((data) => {
        console.log("submit", data);
        setData(data);

        if (clearFormOnSubmit) resetForm(data);
      })}
    >
      <Header renderCount={renderCount} />

      <hr />

      <hr />

      <Pod>
        <Select
          label="Carbon Select"
          {...register("CarbonSelect", { required: "Error" })}
        >
          <Option text="foo" value="1" />
          <Option text="bar" value="2" />
        </Select>
      </Pod>

      <Pod>
        <MultiSelect
          label="Carbon MultiSelect"
          {...register("CarbonMultiSelect", { required: "Error" })}
        >
          <Option text="Blue" value="1" />
          <Option text="Red" value="2" />
          <Option text="White" value="3" />
        </MultiSelect>
      </Pod>

      <Pod>
        <Textbox
          label="Carbon Textbox"
          {...register("CarbonTextbox", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <Textarea
          label="Carbon Textarea"
          {...register("CarbonTextarea", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <GroupedCharacter
          label="Carbon GroupedCharacter"
          separator="-"
          groups={[2, 2, 2]}
          {...register("CarbonGroupedCharacter", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <Decimal
          label="Carbon Decimal"
          {...register("CarbonDecimal", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <Number
          label="Carbon Number"
          {...register("CarbonNumber", { required: "Error" })}
        />
      </Pod>

      {/* Date cannot be uncontrolled */}
      {/* <Pod>
        <Controller
          name="CarbonDate"
          render={({ field }) => {
            const { onBlur, value } = field;
            const dateRegister = {
              ...register("CarbonDate", { required: "Error" }),
            };
            const error = !!errors?.CarbonDate;
            const dateValue =
              value?.formattedValue !== undefined
                ? value?.formattedValue
                : value;
            return (
              <Date
                label="Carbon Date"
                {...dateRegister}
                {...field}
                error={error}
                onBlur={onBlur}
                value={dateValue}
              />
            );
          }}
        />
      </Pod>

      <Pod>
        <Controller
          name="CarbonDateRange"
          render={({ field }) => {
            const { onBlur, value } = field;
            const dateRangeRegister = {
              ...register("CarbonDateRange", { required: "Error" }),
            };
            const error = !!errors?.CarbonDateRange;
            const dateValue = ![
              value[0].formattedValue,
              value[1].formattedValue,
            ].includes(undefined)
              ? [value[0].formattedValue, value[1].formattedValue]
              : value;
            return (
              <DateRange
                label="Carbon Date Range"
                {...dateRangeRegister}
                {...field}
                error={error}
                onBlur={onBlur}
                value={dateValue}
              />
            );
          }}
        />
      </Pod> */}

      <Pod>
        <Checkbox
          label="Carbon Checkbox"
          {...register("CarbonCheckbox", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <Switch
          label="Carbon Switch"
          {...register("CarbonSwitch", { required: "Error" })}
        />
      </Pod>

      <Pod>
        <RadioButtonGroup
          legend="Carbon Radio group legend"
          {...register("CarbonRadioButtons", { required: "Error" })}
        >
          <RadioButton
            id="legend-and-labels-radio-1"
            value="radio1"
            label="Radio Option 1"
            labelHelp="first option"
          />
          <RadioButton
            id="legend-and-labels-radio-2"
            value="radio2"
            label="Radio Option 2"
            labelHelp="second option"
          />
          <RadioButton
            id="legend-and-labels-radio-3"
            value="radio3"
            label="Radio Option 3"
            labelHelp="third option"
          />
        </RadioButtonGroup>
      </Pod>

      <Pod>
        <ButtonToggleGroup
          label="Carbon Button Group"
          {...register("CarbonButtonToggleGroup", { required: "Error" })}
        >
          <ButtonToggle id="legend-and-labels-button-1" value="button1">
            Button 1
          </ButtonToggle>
          <ButtonToggle id="legend-and-labels-button-2" value="button2">
            Button 2
          </ButtonToggle>
          <ButtonToggle id="legend-and-labels-button-3" value="button3">
            Button 3
          </ButtonToggle>
        </ButtonToggleGroup>
      </Pod>

      <Pod>
        <SimpleColorPicker
          legend="Carbon Simple Color Picker"
          {...register("CarbonSimpleColorPicker", { required: "Error" })}
        >
          <SimpleColor aria-label="green" id="#00A376" value="#00A376" />
          <SimpleColor aria-label="blue" id="#0073C1" value="#0073C1" />
          <SimpleColor aria-label="purple" id="#582C83" value="#582C83" />
          <SimpleColor aria-label="orange" id="#E96400" value="#E96400" />
          <SimpleColor aria-label="gray" id="#99ADB6" value="#99ADB6" />
        </SimpleColorPicker>
      </Pod>

      <Pod>
        <Checkbox name="clearOnSubmit" label="Clear form on Submit?" />
      </Pod>
    </Form>
  );
}

export default UncontrolledExample;
