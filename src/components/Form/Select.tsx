"use client";
import React from "react";
import { Controller } from "react-hook-form";
import ReactSelect, { GroupBase, Props } from "react-select";
import { components } from "react-select";
import { twMerge } from "tailwind-merge";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    label?: string;
    formControl?: boolean;
    control?: any;
  }
}

function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  const {
    className,
    label,
    formControl = false,
    control,
    required,
    name,
    defaultValue,
    placeholder = "Выбрать...",
    isSearchable = false,

    ...rest
  } = props;

  const classes = twMerge("cursor-pointer", className);

  if (formControl) {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            {label} {required ? <span className="text-red-500">*</span> : null}
          </span>
        </label>
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name!}
          render={({ field }) => (
            <ReactSelect
              instanceId={name}
              isSearchable={isSearchable}
              noOptionsMessage={() => "Нет вариантов"}
              placeholder={placeholder}
              required={required}
              {...field}
              {...rest}
            />
          )}
        />
      </div>
    );
  }
  return (
    <ReactSelect
      className={classes}
      instanceId={name}
      isSearchable={isSearchable}
      noOptionsMessage={() => "Нет вариантов"}
      placeholder={placeholder}
      required={required}
      theme={(theme: any) => ({
        ...theme,
        borderRadius: "0.5rem",
      })}
      {...rest}
    />
  );
}
const { Option } = components;
export const IconOption = (props: any) => (
  <Option {...props}>
    <div className="flex items-center gap-1">
      <span>{props.data.icon}</span>
      <span>{props.data.label}</span>
    </div>
  </Option>
);

export default Select;
