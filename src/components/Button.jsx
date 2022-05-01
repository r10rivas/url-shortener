const Button = ({ styleCustom, text, type, }) => {
  return (
    <button
      className={`w-full bg-cyan-500 hover:bg-cyan-300 px-5 py-3.5 font-semibold text-white whitespace-nowrap md:text-lg  ${styleCustom}`}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button;
