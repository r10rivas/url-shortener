import { forwardRef } from "react";

const FormInput = forwardRef(({ children, error, ...resProps }, ref) => {
  const classInputError = error ?
    "focus:border-red-400 focus:ring-red-400 placeholder:text-red-400"
    :
    "border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"

  return (
    <div className="w-full">
      <input
        { ...resProps }
        className={`w-full block px-3 py-3.5 border rounded-md text-base shadow-sm placeholder-slate-400
        focus:outline-none focus:ring-1 md:text-lg ${classInputError}`}
        ref={ref}
      />
      {children}
    </div>
  )
});

export default FormInput;
