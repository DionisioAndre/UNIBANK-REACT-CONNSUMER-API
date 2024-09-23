import React, { useState, useEffect } from 'react';
import blogFetch from '../../../../components2/axios/config';
import { useNavigate } from 'react-router-dom';
const DeleteConta = () => {

    const [conta, setconta] = useState('');
    const [id, setId] = useState(0);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchconta = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await blogFetch.get(`api/conta/get/byid/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setconta(response.data.conta);
            } catch (err) {
                setError('Erro ao carregar dados do conta.');
            }
        };
        fetchconta();
    }, [verid]);

    function verid(e) {
        e.preventDefault()
        console.log(id);
    }
    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await blogFetch.delete(`api/conta/deletar/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/');
        } catch (err) {
            setError('Erro ao excluir conta.');
        }
    };
    return (
        <div>
            <p>digite o id:</p>
            <form action="" onSubmit={verid}>
                <input type="text" name="id" id="id" onChange={(e) => setId(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <h1>Excluir conta</h1>
            <p>Você tem certeza que deseja excluir o conta: {conta}?</p>
            <button onClick={handleDelete}>Excluir</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
export default DeleteConta;

