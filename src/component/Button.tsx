import { ComponentPropsWithoutRef } from "react";

type ButtonProp = {
  element: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  element: "anchor";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProp | AnchorProps) {
  if (props.element === "button") {
    return <button {...props}></button>;
  }
  return <a {...props}></a>;
}

export default Button;
