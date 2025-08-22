const Input = ({ className, type = "text", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      className={`${className} border-[1px] border-[#E7DDDD] p-[5px] rounded-lg active:border-[#2592F6] hover:border-[#2592F6]  m-[10px] w-[80%] `}
    />
  );
};

export default Input;
