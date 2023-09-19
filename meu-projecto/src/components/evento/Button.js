function Button(props) {
    // É possível retornar desta maneira quando temos um linha de codigo apenas
    return <button onClick={props.event}>{props.text}</button>
}

export default Button