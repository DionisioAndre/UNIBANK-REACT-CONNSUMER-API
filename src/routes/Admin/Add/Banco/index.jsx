/*
import blogFetch from "../../components2/axios/config";
import { useEffect, useState } from "react";
import Bancoiner from '../../components2/Bancoiner'
import estilos from './Banco.module.css'
import { useNavigate } from "react-router-dom";


const Banco=()=> { 

    const navigate=useNavigate()
    const [banco,setbanco]=useState([]);
    const [posts,setPosts]=useState([]);
    const [funcionario,setfuncionario]=useState([]);
    const createBanco=async (e)=>{
        e.preventDefault();
        const enviar={banco,funcionario}
    
        await blogFetch.post(`api/cadastarbanco/criar`,{
            "banco":enviar.banco,
            "funcionario":enviar.funcionario

        })
        
    }
    return(
        <Bancoiner>
        <form action="" onSubmit={(e)=>createBanco(e)}>
            <div className="forms-control">
                <label htmlFor="banco" >
                    <input type="text" name="banco" id="banco" placeholder="banco" onChange={(e)=>setbanco(e.target.value)}/>
                </label>
                <h1>{banco.banco} </h1>
                <label htmlFor="funcionario" >
                    <input type="number" name="funcionario" id="funcionario" placeholder="funcionario" onChange={(e)=>setfuncionario(e.target.value)}/>
                </label>
            </div> 
            <input type="submit" value="Envia" className="btn" />
        </form>
        </Bancoiner>

    )
}

export default Banco
*/
import blogFetch from "../../../../components2/axios/config";
import Container from "../../../../components2/Container";
import { useState } from "react";
import estilos from './Banco.module.css';
import { useNavigate } from "react-router-dom";

const Banco = () => { 
    const navigate = useNavigate();
    const [banco, setBanco] = useState(""); // Inicialize como string
    const [funcionario, setFuncionario] = useState(""); // Inicialize como string
    const [error, setError] = useState(""); // Para mensagens de erro
    const [success, setSuccess] = useState(""); // Para mensagens de sucesso

    const createBanco = async (e) => {
        e.preventDefault();
        const enviar = { banco, funcionario };

        try {
            await blogFetch.post(`api/getbanco/criar/`, enviar);
            setSuccess("criada com sucesso!");
            setError(""); // Limpa mensagens de erro
            // Navegar para outra página, se necessário
            // navigate('/alguma-rota');
        } catch (error) {
            setError("Erro ao criar . Tente novamente.");
            setSuccess(""); // Limpa mensagens de sucesso
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={createBanco}>
                <div className={estilos.formsControl}>
                    <label htmlFor="banco">
                        <input 
                            type="text" 
                            name="banco" 
                            id="banco" 
                            placeholder="Corretora" 
                            value={banco} 
                            onChange={(e) => setBanco(e.target.value)} 
                        />
                    </label>
                    <h1>{banco}</h1> {/* Corrigido para exibir o valor correto */}
                    <label htmlFor="funcionario">
                        <input 
                            type="number" 
                            name="funcionario" 
                            id="funcionario" 
                            placeholder="Funcionário" 
                            value={funcionario} 
                            onChange={(e) => setFuncionario(e.target.value)} 
                        />
                    </label>
                </div> 
                <input type="submit" value="Enviar" className="btn" />
                {success && <p className={estilos.successMessage}>{success}</p>}
                {error && <p className={estilos.errorMessage}>{error}</p>}
            </form>
        </Container>
    );
}

export default Banco;
