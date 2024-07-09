import { Field } from "@/components/Field";
import { useField } from "@/hooks/useField";
import React from "react";

const HomePage = () => {
  const { createField } = useField();
  const field = createField();
  return <Field field={field} />;
};

export default HomePage;
