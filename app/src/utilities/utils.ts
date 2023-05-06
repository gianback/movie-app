export const showErrors = (errors, setErrors) => {
  for (const key in errors) {
    setErrors((prevState) => {
      return {
        ...prevState,
        [key]: "This field is required",
      };
    });
  }
};
