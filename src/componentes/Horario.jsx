import React from 'react'
import './Horario.css'

export default function(){
    let date = new Date()
    function relogio(){
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    function saudacao(){
        if(date.getHours() < 12){
            return <div>
                <h2>Agora são {relogio()}. Tenha um bom dia!</h2>
                <img className="ilustracao-dia" src="http://www.blogdopilako.com.br/wp/wp-content/uploads/Img-23.jpg" alt="Paisagem matutina"/>
            </div>
        
        }
        else if(date.getHours() < 18){
            return <div>
            <h2>Agora são {relogio()}. Tenha uma boa tarde!</h2>
            <img className="ilustracao-dia" src="https://cdn.pixabay.com/photo/2015/04/17/22/12/end-of-afternoon-728175_960_720.jpg" alt="Paisagem de fim de tarde"/>
        </div>
        }
        else{
            return <div>
            <h2>Agora são {relogio()}. Tenha uma boa noite!</h2>
            <img className="ilustracao-dia" src="https://cdn.pixabay.com/photo/2018/10/22/19/10/nature-3766066_960_720.jpg" alt="Paisagem noturna"/>
        </div>
           }
    }
    return saudacao()
}