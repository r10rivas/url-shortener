import { forwardRef } from "react";

const FormInput = forwardRef(({ children, error, ...resProps }, ref) => {
  const classInputError = error ?
    "focus:border-secondary-red focus:ring-secondary-red placeholder:text-secondary-red"
    :
    "border-neutral-grayish-violet focus:border-neutral-grayish-violet focus:ring-1 focus:ring-primary-cyan"

  return (
    <div className="w-full">
      <input
        { ...resProps }
        className={`w-full block px-3 py-3.5 border rounded-md text-base text-neutral-very-dark-violet shadow-sm placeholder-neutral-grayish-violet focus:outline-none focus:ring-1 md:text-lg ${classInputError}`}
        ref={ref}
      />
      {children}
    </div>
  )
});

export default FormInput;
