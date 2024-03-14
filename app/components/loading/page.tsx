const Loading = () => {
  return (
    <>
      <div className="loader lg:pl-[268px] max-w-fit flex flex-col items-center pt-10 gap-2 overflow-hidden">
        <div className="flex space-x-1">
          <div
            className="w-4 h-4 bg-red-500 rounded-full animate-bounce duration-500"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce duration-500"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-4 h-4 bg-green-500 rounded-full animate-bounce duration-500"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <div>Carregando...</div>
      </div>
    </>
  );
};

export default Loading;
