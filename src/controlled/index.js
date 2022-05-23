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
  Option
} from "carbon-react/lib/components/select";
import { Checkbox } from "carbon-react/lib/components/checkbox";
import Switch from "carbon-react/lib/components/switch";
import {
  RadioButton,
  RadioButtonGroup
} from "carbon-react/lib/components/radio-button";
import {
  SimpleColorPicker,
  SimpleColor
} from "carbon-react/lib/components/simple-color-picker";
import Form from "carbon-react/lib/components/form";
import Button from "carbon-react/lib/components/button";
import Number from "carbon-react/lib/components/number";
import Date from "carbon-react/lib/components/date";
import DateRange from "carbon-react/lib/components/date-range";

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
  CarbonSimpleColorPicker: ""
};

function ControlledExample() {
  const { handleSubmit, setValue, control, register, unregister, clearErrors, reset, formState: { errors } } = useForm({ defaultValues, mode: "onBlur" });
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
          console.log("submit", data)
          setData(data);

          if (clearFormOnSubmit) resetForm(data)
        })}
      >
        <Header renderCount={renderCount} />


        <hr />


        <hr />

        <Pod>
            <Controller
              name="CarbonSelect"
              control={control}
              render={({ field }) => {
                const { onBlur } = field;
                const selectRegister = {...register("CarbonSelect", { required: "Error" }) };
                const error= !!errors?.CarbonSelect;
                return (
                  <Select label="Carbon Select" {...selectRegister} {...field} error={error} onBlur={onBlur}>
                    <Option text="foo" value="1" />
                    <Option text="bar" value="2" />
                  </Select>
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonMultiSelect"
              control={control}
              render={({ field }) => {
                const { onBlur } = field
                const multiSelectRegister = {...register("CarbonMultiSelect", { required: "Error" }) };
                const error= !!errors?.CarbonMultiSelect
                return (
                  <MultiSelect label="Carbon MultiSelect" {...multiSelectRegister} {...field} error={error} onBlur={onBlur}>
                    <Option text="Blue" value="1" />
                    <Option text="Red" value="2" />
                    <Option text="White" value="3" />
                  </MultiSelect>
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonTextbox"
              control={control}
              render={({ field }) => {
                const { onBlur } = field;
                const textboxRegister = {...register("CarbonTextbox", { required: "Error" }) };
                const error= !!errors?.CarbonTextbox;
                return (
                  <Textbox label="Carbon Textbox" {...textboxRegister} {...field} error={error} onBlur={onBlur} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonTextarea"
              control={control}
              render={({ field }) => {
                const { onBlur } = field;
                const textareaRegister = {...register("CarbonTextarea", { required: "Error" }) };
                const error= !!errors?.CarbonTextarea;
                return (
                  <Textarea label="Carbon Textarea" {...textareaRegister} {...field} error={error} onBlur={onBlur} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonGroupedCharacter"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field
                const groupedCharacterRegister = {...register("CarbonGroupedCharacter", { required: "Error" }) };
                const error= !!errors?.CarbonGroupedCharacter;
                return (
                  <GroupedCharacter label="Carbon GroupedCharacter" {...groupedCharacterRegister} {...field} error={error} onBlur={onBlur} value={value?.rawValue !== undefined ? value?.rawValue : value} separator="-"
                  groups={[2, 2, 2]}/>
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonDecimal"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field
                const decimalRegister = {...register("CarbonDecimal", { required: "Error" }) };
                const error= !!errors?.CarbonDecimal;
                return (
                  <Decimal label="Carbon Decimal" {...decimalRegister} {...field} error={error} onBlur={onBlur} value={value?.rawValue !== undefined ? value?.rawValue : value} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonNumber"
              control={control}
              render={({ field }) => {
                const { onBlur } = field
                const numberRegister = {...register("CarbonNumber", { required: "Error" }) };
                const error= !!errors?.CarbonNumber;
                return (
                  <Number label="Carbon Number" {...numberRegister} {...field} error={error} onBlur={onBlur} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonDate"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field;
                const dateRegister = {...register("CarbonDate", { required: "Error" }) };
                const error= !!errors?.CarbonDate;
                const dateValue = value?.formattedValue !== undefined ? value?.formattedValue : value;
                return (
                  <Date label="Carbon Date" {...dateRegister} {...field} error={error} onBlur={onBlur} value={dateValue} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonDateRange"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field;
                const dateRangeRegister = {...register("CarbonDateRange", { required: "Error" }) };
                const error= !!errors?.CarbonDateRange;
                const dateValue = ![value[0].formattedValue, value[1].formattedValue].includes(undefined) ? [value[0].formattedValue, value[1].formattedValue] : value;
                return (
                  <DateRange label="Carbon Date Range" {...dateRangeRegister} {...field} error={error} onBlur={onBlur} value={dateValue} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonCheckbox"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field
                const checkboxRegister = {...register("CarbonCheckbox", { required: "Error" }) };
                const error= !!errors?.CarbonCheckbox;
                return (
                  <Checkbox label="Carbon Checkbox" {...checkboxRegister} {...field} error={error} onBlur={onBlur} checked={value} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonSwitch"
              control={control}
              render={({ field }) => {
                const { onBlur, value } = field
                const switchRegister = {...register("CarbonSwitch", { required: "Error" }) };
                const error= !!errors?.CarbonSwitch;
                return (
                  <Switch label="Carbon Switch" {...switchRegister} {...field} error={error} onBlur={onBlur} checked={value} />
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonRadioButtons"
              control={control}
              render={({ field }) => {
                const { onBlur } = field
                const radioButtonRegister = {...register("CarbonRadioButtons", { required: "Error" }) };
                const error= !!errors?.CarbonRadioButtons;
                return (
                  <RadioButtonGroup
                    legend="Carbon Radio group legend"
                    {...radioButtonRegister}
                    {...field}
                    error={error}
                    onBlur={onBlur}
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
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonButtonToggleGroup"
              control={control}
              render={({ field }) => {
                const { onBlur } = field
                const buttonToggleRegister = {...register("CarbonButtonToggleGroup", { required: "Error" }) };
                const error= !!errors?.CarbonButtonToggleGroup;
                return (
                  <ButtonToggleGroup
                    label="Carbon Button Group"
                    {...buttonToggleRegister}
                    {...field}
                    error={error}
                    onBlur={onBlur}
                  >
                    <ButtonToggle
                      id="legend-and-labels-button-1"
                      value="button1"
                      >
                        Button 1
                    </ButtonToggle>    
                    <ButtonToggle
                      id="legend-and-labels-button-2"
                      value="button2"
                    >
                      Button 2
                    </ButtonToggle>
                    <ButtonToggle
                      id="legend-and-labels-button-3"
                      value="button3"
                    >
                      Button 3
                    </ButtonToggle>
                  </ButtonToggleGroup>
                );
              }}
            />
          </Pod>

          <Pod>
            <Controller
              name="CarbonSimpleColorPicker"
              control={control}
              render={({ field }) => {
                const { onBlur } = field
                const simpleColorRegister = {...register("CarbonSimpleColorPicker", { required: "Error" }) };
                const error= !!errors?.CarbonSimpleColorPicker;
                return (
                  <SimpleColorPicker
                    legend="Carbon Simple Color Picker"
                    {...simpleColorRegister}
                    {...field}
                    error={error}
                    onBlur={onBlur}
                  >
                    <SimpleColor aria-label="green" id="#00A376" value="#00A376" />
                    <SimpleColor aria-label="blue" id="#0073C1" value="#0073C1" />
                    <SimpleColor aria-label="purple" id="#582C83" value="#582C83" />
                    <SimpleColor aria-label="orange" id="#E96400" value="#E96400" />
                    <SimpleColor aria-label="gray" id="#99ADB6" value="#99ADB6" />
                  </SimpleColorPicker>
                );
              }}
            />
          </Pod>

          <Pod>
            <Checkbox
              name="clearOnSubmit"
              checked={clearFormOnSubmit}
              onChange={(e) => setClearFormOnSubmit(e.target.checked)}
              label="Clear form on Submit?"
            />
          </Pod>
      </Form>
  );
}

export default ControlledExample;
