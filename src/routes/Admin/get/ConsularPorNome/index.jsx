import React, { useState } from 'react';
import blogFetch from '../../../../components2/axios/config';

const ConsultarPorNome = () => {
    const [name, setName] = useState('');
    const [banco, setBanco] = useState(null);
    const [error, setError] = useState('');
    const eventoSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await
                blogFetch.get(`api/getbanco/get/byname/${name}/`);
            setBanco(response.data);
            setError('');
        } catch (err) {
            setError('Banco não encontrado ou erro na solicitação.');
            setBanco(null);
        }
    };
    return (
        <div>
            <h1>Buscar Banco pelo Nome</h1>
            <form onSubmit={eventoSubmit}>
                <div>
                    <label htmlFor="name">Nome do Banco:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Buscar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {banco && (
                <div>
                    <h2>Detalhes do Banco</h2>
                    <p><strong>ID:</strong> {banco.id}</p>
                    <p><strong>Nome do Banco:</strong> {banco.banco}</p>
                    <p><strong>Funcionário:</strong>
                        {banco.funcionario}</p>
                    <p><strong>Criado em:</strong> {new
                        Date(banco.created_at).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default ConsultarPorNome;