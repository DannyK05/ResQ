const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-1 my-[15px] px-[50px] mx-1 w-[95%] text-white"
    >
      {children}
    </button>
  );
};

export default Button;
