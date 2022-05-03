const Button = ({ color, onClick, styleCustom, text, type, }) => {
  const styleColor =  color ?? "bg-cyan-500 hover:bg-cyan-300";

  return (
    <button
      className={`w-full px-5 py-3.5 font-semibold text-white whitespace-nowrap md:text-lg ${styleColor} ${styleCustom}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
