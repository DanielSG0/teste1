import { NextResponse } from "next/server";

// Simulação de banco de dados em memória
const items = [
  { id: 1, name: "Garrafa de Água Azul", location: "Prédio 3", status: "perdido" },
  { id: 2, name: "Chave de Carro", location: "Biblioteca", status: "achado" }
];

// GET: Lista todos os itens
export async function GET() {
  return NextResponse.json(items);
}

// POST: Cadastra um novo item
export async function POST(request: Request) {
  const body = await request.json();

  const newItem = {
    id: items.length + 1,
    name: body.name,
    location: body.location,
    status: body.status || "perdido",
  };

  items.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}