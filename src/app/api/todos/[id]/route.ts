import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";
/* interface Segments {
  params: {
    id: string;
  };
} */

const getTodo = async (id: string): Promise<Todo | null> => {

    const user = await getUserSessionServer();
  
    if (!user) {
      return null;
    }
  
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (todo?.userId !== user.id) {
    return null;
  }

  return todo;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con el id ${id} no existe` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con el id ${id} no existe` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    });

    return NextResponse.json(updateTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
