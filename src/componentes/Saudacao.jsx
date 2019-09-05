import React from 'react'

export default function(props){
    let userName = window.prompt("Digite seu nome:")
    return <h1> Olá, {userName}! Como vai?</h1>
}
