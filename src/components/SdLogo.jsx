const SdLogo = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <img src="images/iti-logo.svg" className="w-10" alt="" />
        <p className="flex-col leading-5 justify-start items-center border-l-3 pl-2 border-gray-400">
          <span className="block  text-muted-foreground">System</span>
          <span className="block">Development</span>
        </p>
      </div>
    </>
  );
};

export default SdLogo;
