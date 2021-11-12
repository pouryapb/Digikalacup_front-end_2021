import React from "react";
import FormItem from "./components/FormItem";
import Button from "./components/Button";
import { Controller, useForm } from "react-hook-form";
import "./App.css";

function App({ onSubmit, fields }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  return (
    <div className="form">
      {
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <Controller
              name={field.name}
              control={control}
              render={({ field }) => (
                <FormItem
                  type={field.type}
                  options={field.options}
                  error={field.error}
                />
              )}
            />
          ))}
          <input type="submit" />
        </form>
      }
      {
        // Add submit functionality
      }
      <Button>ثبت</Button>
    </div>
  );
}

export default App;
