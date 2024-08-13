import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Seo } from "./seo";

export const FormZod = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Required" }),
    age: z
      .number()
      .min(10, {
        message: "Age must be greater than 10",
      })
      .default(10),
    email: z.string().email({ message: "Invalid email" }),
  });

  // type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      age: 0,
      email: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    const { name, age, email } = data;
    alert("Name: " + name + "\n" + " Age: " + age + "\n" + " Email: " + email);
  });
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center gap-5">
        <Seo title="Form build with react-hook-form + Zod" desc="This form is made using react-hook-form + Zod Hook" />
        <h1 className="text-xl lg:text-3xl">Form with React-Hook-Form + Zod</h1>
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
              {...register("name")}
            />
          </div>
          {errors.name?.message && <p>{errors?.name?.message.toString()}</p>}
          <div className="flex flex-col gap-2">
            <label htmlFor="age">Enter your Age</label>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="number"
              id="age"
              {...register("age", {
                setValueAs: (value) => Number(value),
              })}
            />
            {errors.age?.message && <p>{errors.age?.message.toString()}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter your Email</label>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email?.message && <p>{errors.email?.message.toString()}</p>}
          </div>
          <button
            className="border-2 border-black bg-black text-white p-3 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};
