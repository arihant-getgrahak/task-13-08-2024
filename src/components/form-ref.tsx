import { useRef } from "react";

export const FormHook = () => {
  const data = useRef({
    name: "",
    age: 0,
    email: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    data.current = {
      name: "",
      age: 0,
      email: "",
    };
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.current = { ...data.current, [e.target.name]: e.target.value };
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="border-2 border-red-500 p-5 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Enter your Name</label>
          <input
            className="border-2 border-black rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            value={data.current.name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age">Enter your Age</label>
          <input
            className="border-2 border-black rounded-lg p-1"
            type="number"
            id="age"
            name="age"
            value={data.current.age}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Enter your Email</label>
          <input
            className="border-2 border-black rounded-lg p-1"
            type="email"
            id="email"
            name="email"
            value={data.current.email}
            onChange={onChange}
          />
        </div>
        <button
          className="border-2 border-black bg-black text-white p-3 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};
