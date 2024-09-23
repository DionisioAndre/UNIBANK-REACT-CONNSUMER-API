/*import estilos from "./Form.module.css"
import { categories } from "../Categor";
import { useState } from "react";
function Form() {
    const [Url,setUrl]=useState('');
    const [categor,setcategor]=useState('');
    const [Errors,setErrors]=useState('');
    const [Videos,setVideos]=useState('');
    function onsave(e) {
        e.preventDefault()
        console.log(Url,categor)
        if(!categor||categor==='-'){
            setErrors('Erro! Escolha uma categoria')
            return
        }else{
            setErrors('')
        }
        if(Url.length>=2 && categor){
        const newVideos={Url,categor}
        setVideos([...Videos,newVideos])
        localStorage.setItem('Videos',JSON.stringify([...Videos,newVideos]))
        setUrl('')
        setcategor('') 
        }else{
            setErrors('URL invalida')
        }
    

    }
    return (
        <section className={estilos.Form}>
            <h2>Cadastrar Filme</h2>
            <form onSubmit={onsave}>
                <div>
                    <label>URL</label>
                    <input type="text" required='required' placeholder="Digite a url/"value={Url} onChange={e=>setUrl(e.target.value)}/>
                </div>

                <div>
                    <label>Videos</label>
                    <select value={categor} onChange={e=>setcategor(e.target.value)} required='required'>

                        <option value="-"> Selecione uma Categoria</option>
                        {categories.map(item => {
                            return <option key={item}value={item}>{item}</option>

                        })}

                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {Errors}
                </div>
                
            </form>
        </section>

    );
}
export default Form;*/