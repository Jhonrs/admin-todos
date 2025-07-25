"use client";

import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { addTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => {
  /*  const router = useRouter();
    
      const toggleTodo = async(id: string, complete: boolean)=>{
        const updateTodo = await todosApi.updateTodo(id, complete);
        console.log({updateTodo});
        
        router.refresh(); */

  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    //await addTodo(description);
    await todosApi.createTodo(description);
    router.refresh();
    setDescription("");
  };

  /* 
 CON RESTful API
const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    
    todosApi.createTodo(description);
    setDescription('');
     router.refresh();
  }; */

  /* const deleteCompleted = async() => {
     await todosApi.deleteCompletedTodo();
     router.refresh(); 
  }
*/

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Borrar completados
      </button>
    </form>
  );
};
