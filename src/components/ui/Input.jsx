const Input = ({ className, type = "text", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      className={`${className} border border-[#E7DDDD] p-1 rounded-lg active:border-[#2592F6] hover:border-[#2592F6] m-2.5 w-4/5 `}
    />
  );
};

export default Input;
