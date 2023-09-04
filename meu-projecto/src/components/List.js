import Item from './Item'
function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1995}/>
                <Item marca="Fiati" ano_lancamento={1994}/>
                <Item marca="Renault" ano_lancamento={1993}/>
                <li>Item 2</li>
            </ul>
        </>
    )
}


export default List