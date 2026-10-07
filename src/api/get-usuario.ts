export async function BuscarUsuario(id: string) {
  const resposta = await fetch("https://reqres.in/api/users/" + id)


  if(!resposta.ok){
    throw new Error("Erro ao busca usuarios")
  }

  const json = await resposta.json()
  return json.data
}

