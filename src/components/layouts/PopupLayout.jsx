const PopupLayout = ({ children, close, title, visibility, className }) => {
  return (
    <section
      className={`${className !== undefined ? className : ""} ${
        visibility ? "absolute" : "hidden"
      } lg:w-2/5 top-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-[#FFFFFF1B] back`}
    >
      <div
        className={`w-4/5 bg-white py-2.5 px-[15px] rounded-[20px] z-10 shadow-md border border-[#fafa]`}
      >
        <div className="w-full flex items-center space-x-6 border-b border-[#fafa] pb-1 mb-2">
          <ion-icon onClick={close} size="large" name="close-circle"></ion-icon>
          <h1 className="text-sm">{title}</h1>
        </div>

        {children}
      </div>
    </section>
  );
};

export default PopupLayout;
