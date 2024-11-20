
import { useState } from 'react';

interface FormValues {
  nombre: string;
  imagen: string;
  precio: number;
}

export function useForm(initialState: FormValues) {
  const [values, setValues] = useState<FormValues>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { handleChange, values, resetForm };
}
