import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

function App() {
  const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    age: z.number().min(10),
  });

  
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  })
  return (
    <>

    </>
  )
}

export default App
