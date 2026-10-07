import React from 'react'

export async function BuscarUsuarios() {
  const resposta = await fetch("https://reqres.in/api/users")


  if(!resposta.ok){
    throw new Error("Erro ao busca usuarios")
  }

  const json = await resposta.json()
  return json.data
}

