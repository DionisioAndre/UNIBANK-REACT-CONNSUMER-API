import React, { useState, useEffect } from 'react';
import blogFetch from '../../../../components2/axios/config';
import { useNavigate } from 'react-router-dom';
const DeleteBanco = () => {

    const [banco, setBanco] = useState('');
    const [id, setId] = useState(0);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBanco = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await blogFetch.get(`api/getbanco/ byid/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBanco(response.data.banco);
            } catch (err) {
                setError('Erro ao carregar dados.');
            }
        };
        fetchBanco();
    }, [id]);

    function verid(e) {
        e.preventDefault()
        console.log(id);
    }
    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await blogFetch.delete(`api/getbanco/deletar/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/');
        } catch (err) {
            setError('Erro ao excluir.');
        }
    };
    return (
        <div>
            <p>digite o id:</p>
            <form action="" onSubmit={verid}>
                <input type="text" name="id" id="id" onChange={(e) => setId(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <h1>Excluir Banco</h1>
            <p>Você tem certeza que deseja excluir o banco: {banco}?</p>
            <button onClick={handleDelete}>Excluir</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
export default DeleteBanco;

