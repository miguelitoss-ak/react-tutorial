import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

const UsuarioDetalhe = () => {
    const { id } = useParams(); 

    const [usuario, setUsuario] = React.useState(null);
    const [carregando, setCarregando] = React.useState(true);

    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true);
                const data= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                
                const jsonData = await data.json();
                setUsuario(jsonData);
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            } finally {
                setCarregando(false);
            }
        }

        buscarUsuario();
    }, [id]);

  return (
    <div>
        <h1>Detalhes do Usuário</h1>
        {usuario && (
            <div>
                <p>Nome: {usuario.name}</p>
                <p>Email: {usuario.email}</p>
                <p>Telefone: {usuario.phone}</p>
            </div>
        )}
    </div>
  )
}

export default UsuarioDetalhe