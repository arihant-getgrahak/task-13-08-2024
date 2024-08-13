import { useState, useContext, useEffect } from "react";
import { Seo } from "./seo";
import { FormContext } from "../context/formContext";

type FormType = {
  name: string;
  age: number;
  email: string;
};
export type FormContextType = {
  data: FormType;
  saveData: (data: FormType) => void;
  showData: () => void;
};
export const FormHook = () => {
  const { saveData } = useContext(FormContext) as FormContextType;
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, age, email } = data;
    alert("Name: " + name + "\n" + " Age: " + age + "\n" + " Email: " + email);
    saveData(data);
    setData({
      name: "",
      age: 0,
      email: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() =>{
   alert("Welcome to the form made using useState");
  },[])
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <Seo
        title="Form build with useState"
        desc="This form is made using useState Hook"
      />
      <h1 className="text-3xl">Form with useState</h1>
      <form
        onSubmit={onSubmit}
        className="border-2 border-red-500 p-5 flex flex-col gap-5 lg:w-1/3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Enter your Name</label>
          <input
            className="border-2 border-black rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            value={data.name}
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
            value={data.age}
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
            value={data.email}
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
