import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { loadComments, saveComment } from "../../sockets/movie.socket";
import { useAuthStore } from "../../stores/auth/authStore";
import { Comment } from "../../interfaces/Home";
import { Button } from "../atoms";
import { ToastContainer, ToastOptions, toast } from "react-toastify";

const toastConfigMssgSuccess: ToastOptions = {
  position: "top-center",
  autoClose: 3000,
  type: "success",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  style: {
    fontSize: "16px",
  },
};
const toastConfigMssgError: ToastOptions = {
  position: "top-center",
  autoClose: 2500,
  type: "error",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  style: {
    fontSize: "16px",
  },
};
type FormCommentProps = {
  _id: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

export function FormComment({ _id, setComments }: FormCommentProps) {
  const [qualification, setQualification] = useState("");
  const token = useAuthStore((state) => state.token);

  const handleSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const objectFormData = Object.fromEntries(formData);
    if (!objectFormData["content"] || !qualification) {
      toast("Por favor llena todos los campos", toastConfigMssgError);
    } else {
      const payload = {
        content: formData.get("content"),
        qualification,
        movieId: _id,
      };

      saveComment({ payload, token });
      loadComments(setComments);

      form.reset();
      toast("¡El comentario ha sido agregado!", toastConfigMssgSuccess);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        limit={1}
      />
      <form onSubmit={handleSubmitComment} className="mt-12">
        <textarea
          className="text-2xl py-6 px-4 rounded-md"
          name="content"
          id="content"
          placeholder="Tu comentario"
        />
        <div className="flex flex-col gap-4 mb-8">
          <label
            htmlFor="minmax-range"
            className="block my-4  text-3xl font-medium text-white"
          >
            Selecciona tu calificación del 1 al 5
          </label>

          <div className="flex gap-8 [&>div>label]:text-white [&>div>label]:text-[1.8rem] ">
            <div className="flex gap-4">
              <input
                type="radio"
                id="opcion1"
                name="opciones"
                value="1"
                onChange={(e) => setQualification(e.currentTarget.value)}
              />
              <label htmlFor="opcion1">1</label>
            </div>

            <div className="flex gap-4">
              <input
                type="radio"
                id="opcion2"
                name="opciones"
                value="2"
                onChange={(e) => setQualification(e.currentTarget.value)}
              />
              <label htmlFor="opcion2">2</label>
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                id="opcion3"
                name="opciones"
                value="3"
                onChange={(e) => setQualification(e.currentTarget.value)}
              />
              <label htmlFor="opcion3">3</label>
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                id="opcion4"
                name="opciones"
                value="4"
                onChange={(e) => setQualification(e.currentTarget.value)}
              />
              <label htmlFor="opcion4">4</label>
            </div>
            <div className="flex gap-4">
              <input
                type="radio"
                id="opcion5"
                name="opciones"
                value="5"
                onChange={(e) => setQualification(e.currentTarget.value)}
              />
              <label htmlFor="opcion5">5</label>
            </div>
          </div>
        </div>
        <Button type="secondary">Publicar</Button>
      </form>
    </>
  );
}
