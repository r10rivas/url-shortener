const Card = ({ icon, children }) => {
  return (
    <div className="p-10 pt-24 relative bg-white rounded-md">
      <div className="w-16 h-16 left-1/2 transform -translate-x-1/2 bg-primary-dark-violet rounded-full absolute -top-7 flex justify-center items-center lg:w-20 lg:h-20">
        <img className="" src={icon}/>
      </div>
      {children}
    </div>
  );
}

export default Card;
