import blogFetch from '../../../../components2/axios/config';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateBanco = () => {

    const [name, setName] = useState('');
    const [Banco, setBanco] = useState(null);
    const [enviar, setEnviar] = useState(null);
    const [error1, setError1] = useState('');
    const [error, setError] = useState('');
    const enviar1 = ({'"banco"':enviar});
    const navigate = useNavigate();

    function actualizar(b) {
        setEnviar(b)

    }

    const eventoSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await
                blogFetch.get(`api/getbanco/get/byname/${name}/`);
            pegarBanco(response.data);
            setError1('');
        } catch (err) {
            setError1('Banco não encontrado ou erro na solicitação.');
            setBanco(null);
        }
    };
    function pegarBanco(p) {
        setBanco(p)
        console.log(p)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        enviar.Tostring()
        try {
            console.log(enviar1)
            await blogFetch.put(`api/getbanco/update/${Banco.id}/`, { enviar1 });
            navigate('/');
        } catch (err) {
            setError('Erro ao atualizar banco.');
        }
    };
    return (
        <>
            <div>
                <h1>Buscar Banco pelo Nome</h1>
                <form onSubmit={eventoSubmit}>
                    <div>
                        <label htmlFor="name">Nome do Banco:</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Buscar</button>
                </form>
                {error1 && <p style={{ color: 'red' }}>{error1}</p>}
                {Banco && (
                    <div>
                        <h2>Detalhes do Banco</h2>
                        <p><strong>ID:</strong> {Banco.id}</p>
                        <p><strong>Nome do Banco:</strong> {Banco.banco}</p>
                        <p><strong>Funcionário:</strong>
                            {Banco.funcionario}</p>
                        <p><strong>Criado em:</strong> {new
                            Date(Banco.created_at).toLocaleString()}</p>
                    </div>
                )}
            </div>


            <div>
                <h1>Atualizar Banco</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="banco">Nome do Banco:</label>
                        <input
                            type="text"
                            id="banco"
                            onChange={(e) => actualizar(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Atualizar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    );
};

export default UpdateBanco;