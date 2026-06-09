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

// POST: Rota para cadastrar um novo item
export async function POST(request: Request) {
  const API_KEY = process.env.MINHA_CHAVE_SECRETA;

  // Simulando uma verificação de segurança
  if (!API_KEY) {
    return NextResponse.json(
      { error: "Chave de API não encontrada" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const newItem = {
    id: items.length + 1,
    name: body.name,
    location: body.location,
    status: body.status || "perdido",
  };

  items.push(newItem);

  // Apenas para provar que a chave foi utilizada
  console.log("Item cadastrado usando a chave:", API_KEY);

  return NextResponse.json(newItem, { status: 201 });
}