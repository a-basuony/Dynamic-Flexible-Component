import { ComponentPropsWithoutRef, FormEvent, ReactNode } from "react";

type formProps = ComponentPropsWithoutRef<"form"> & {
  children: ReactNode;
  onSave: (data: unknown) => void;
};

function Form({ onSave, children, ...otherProps }: formProps) {
  // if i'm not extract the props in the function parameter it will take the onSave in the ...otherProps and give me an error
  // because the onSave() function it will send to the <form {...otherProps} ></form> , so must extract it in function parameter
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}

export default Form;
