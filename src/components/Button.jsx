const Button = ({ text, type, }) => {
  return (
    <button
      className="w-full bg-sky-500 hover:bg-sky-300 px-5 py-3.5 text-sm leading-5 rounded-md font-semibold text-white whitespace-nowrap md:text-lg"
      type={type}
    >
      {text}
    </button>
  )
}

export default Button;
