import { useState, createContext } from "react";

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

export const FormContext = createContext<FormContextType | null>(null);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, useData] = useState<FormType>({
    name: "",
    age: 0,
    email: "",
  });

  const saveData = (data: FormType) => {
    useData(data);
    console.log("data saved", data);
  };

  const showData = () => {
    console.log(data);
    return data;
  };
  return (
    <FormContext.Provider value={{ data, saveData, showData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
