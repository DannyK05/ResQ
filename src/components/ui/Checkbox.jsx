const Checkbox = ({ ...props }) => {
  return (
    <input
      {...props}
      className="border-neutral-400 border-2 border-[#E7DDDD] p-[5px] "
      type="checkbox"
    />
  );
};

export default Checkbox;
