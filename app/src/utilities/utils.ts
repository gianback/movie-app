import { fetchMovieByUser } from "../services/fetch.movies.service";

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

export const formatTime = (date: string): string => {
  const newDate = new Date(date);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(newDate);
  if (newDate.toDateString() === new Date().toDateString())
    return `Hoy a las ${time}`;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (yesterday.toDateString() === newDate.toDateString())
    return `Ayer a las ${time}`;

  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  }).format(newDate);
};
