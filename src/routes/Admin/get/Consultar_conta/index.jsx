
import blogFetch from "../../../../components2/axios/config";
import { useEffect, useState } from "react";
import Container from '../../../../components2/Container'
import { useNavigate } from "react-router-dom";


const ConsultarConta=()=> { 

    const [posts,setPosts]=useState([]);
    const getPosts=async()=>{
        try {
            const response=await blogFetch.get(`api/conta/get`)
            const data=response.data
            console.log(data)
            setPosts(data)
        } catch (error) {
            console.log(error) 
        }
    };
    useEffect(()=>{
        getPosts()
    },[]);

    return(
        <Container>
        <div >
              <h1>Lista</h1>
              {posts.length===0?(
                <p>Carregando...</p>
              ):(
                posts.map((post)=>(
                    <div className="post" key={post.id}>
                        
                        
                            <h2>{post.bancoID}</h2>
                            <li>{post.id}</li>
                            <li>{post.conta}</li>
                            <li>{post.created_at}</li>
                    </div>
                ) )
              ) }
              
        </div>
        </Container>

    )
}

export default ConsultarConta