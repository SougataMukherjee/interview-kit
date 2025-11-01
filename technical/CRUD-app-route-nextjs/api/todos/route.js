let todos = [
  { id: 1, title: 'Learn Next.js' },
  { id: 2, title: 'Build Todo App' },
];

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(req) {
  const { title } = await req.json();
  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  return NextResponse.json(newTodo);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  todos = todos.filter(t => t.id !== id);
  return NextResponse.json({ success: true });
}
