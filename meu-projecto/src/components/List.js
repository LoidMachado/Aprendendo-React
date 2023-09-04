import Item from "./Item"
function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiati"/>
                <Item marca="Renault"/>
                <li>Item 2</li>
            </ul>
        </>
    )
}

export default List