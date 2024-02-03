import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </p>
  );
}

export default Input;
