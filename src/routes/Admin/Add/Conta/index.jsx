/*
import blogFetch from "../../components2/axios/config";
import { useEffect, useState } from "react";
import Container from '../../components2/Container'
import estilos from './Conta.module.css'
import { useNavigate } from "react-router-dom";


const Conta=()=> { 

    const navigate=useNavigate()
    const [banco,setbanco]=useState([]);
    const [posts,setPosts]=useState([]);
    const [funcionario,setfuncionario]=useState([]);
    const createConta=async (e)=>{
        e.preventDefault();
        const enviar={banco,funcionario}
    
        await blogFetch.post(`api/cadastarbanco/criar`,{
            "banco":enviar.banco,
            "funcionario":enviar.funcionario

        })
        
    }
    return(
        <Container>
        <form action="" onSubmit={(e)=>createConta(e)}>
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
        </Container>

    )
}

export default Conta
*/
import blogFetch from "../../../../components2/axios/config";
import { useState } from "react";
import Container from '../../../../components2/Container';
import estilos from './Conta.module.css';
import { useNavigate } from "react-router-dom";

const Conta = () => { 
    const navigate = useNavigate();
    const [banco, setBanco] = useState(0); // Inicialize como string
    const [conta, setconta] = useState(""); // Inicialize como string
    const [error, setError] = useState(""); // Para mensagens de erro
    const [success, setSuccess] = useState(""); // Para mensagens de sucesso

    const createConta = async (e) => {
        e.preventDefault();
        const enviar = { banco, conta };

        try {
            await blogFetch.post(`api/conta/criar`, enviar);
            setSuccess("Conta criada com sucesso!");
            setError(""); // Limpa mensagens de erro
            // Navegar para outra página, se necessário
            // navigate('/alguma-rota');
        } catch (error) {
            setError("Erro ao criar conta. Tente novamente.");
            setSuccess(""); // Limpa mensagens de sucesso
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={createConta}>
                <div className={estilos.formsControl}>
                    <label htmlFor="banco">
                        <input 
                            type="number" 
                            name="banco" 
                            id="banco" 
                            placeholder="Id Banco" 
                            value={banco} 
                            onChange={(e) => setBanco(e.target.value)} 
                        />
                    </label>
                    <h1>{banco}</h1> {/* Corrigido para exibir o valor correto */}
                    <label htmlFor="funcionario">
                        <input 
                            type="text" 
                            name="conta" 
                            id="conta" 
                            placeholder="tipo de conta" 
                            value={conta} 
                            onChange={(e) => setconta(e.target.value)} 
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

export default Conta;
