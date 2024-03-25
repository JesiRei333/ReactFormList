import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ListaSuper() {
  const [todos, setTodos] = useState([]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (data.lista.trim().length > 0) {
      setTodos([data.lista.trim(), ...todos]);
      reset();
    }
  }
  function removeItem(index) {
    return () => {
      const filtered = todos.filter((item, innerIndex) => index !== innerIndex);
      setTodos(filtered);
    };
  }

  return (
    <main
      className="p-10 min-h-screen bg-slate-900 text-slate-300 bg-contain
    bg-[url('https://wallpapers.com/images/hd/cinnamoroll-desktop-bhhl12rk370ivdwb.jpg')]"
    >
      <form
        name="form"
        className="w-full flex justify-center items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={clsx(
            "max-w-sm w-full p-2 rounded text-slate-800 hover:shadow-lg hover:shadow-cyan-500 font-semibold ",
            { "0 shadow-lg sha shadow-teal-500": errors.user }
          )}
          type="text"
          name="lista"
          placeholder="Add cosas por hacer ♥"
          required
          {...register("lista", {
            minLength: {
              value: 3,
              message: "Add una tarea de al menos 3 caracteres ♥",
            },
            maxLength: {
              value: 25,
              message: "Add una tarea de máximo 25 caracteres ♥",
            },
          })}
        />

        <button
          className="bg-indigo-400 text-slate-900 rounded-r-xl p-2 hover:bg-indigo-400/50 hover:text-white font-semibold hover:shadow-lg  hover:shadow-cyan-500"
          type="submit"
        >
          Agregar
        </button>
      </form>

      {errors.lista && (
        <p className=" flex justify-center items-center text-xs  p-3 text-slate-950 hover:text-violet-700 font-semibold ">
          {"⚠ "} {errors.lista.message}
        </p>
      )}
      <br />
      <div className="w-full flex flex-col  justify-center items-center gap-5 ">
        {todos.map((item, index) => {
          return (
            <div
              key={`item-${index}`}
              className=" w-full  flex justify-center items-center gap-2 rounded-xl min-w-[300px] max-w-[465px] bg-cyan-300/30 text-slate-950 hover:shadow-lg hover:shadow-cyan-500 "
            >
              <p className=" max-w-sm w-full flex font-semibold">
                <img
                  className="max-w-[20px]"
                  src="https://cdn-icons-png.flaticon.com/512/1721/1721570.png"
                  alt="!"
                />
                {"  "}
                {item}{" "}
              </p>

              <button
                onClick={removeItem(index)}
                className="bg-indigo-400 text-slate-900 rounded-r-xl p-2 hover:bg-indigo-400/50 hover:text-white font-semibold flex hover:shadow-lg hover:shadow-cyan-500 pr-5 pl-5 align-middle text-center"
              >
                Done{" "}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
