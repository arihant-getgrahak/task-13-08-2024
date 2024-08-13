export const Header = () => {
  return (
    <header className="flex fixed justify-center lg:justify-between items-center h-14 w-full p-2 border-b-2 border-black">
      <a href="/" className="text-2xl font-bold hidden lg:block">
        Header
      </a>
      <div className="flex gap-5 text-sm lg:text-[1.2rem] ">
        <a href="/">Form with zod</a>
        <a href="/hook-form">Form with useState</a>
      </div>
      <p className="text-xl font-semibold hidden lg:block">
        Created by Arihant Jain
      </p>
    </header>
  );
};
