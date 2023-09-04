import PropTypes from 'prop-types'
function Item({marca, ano_lancamento}) {
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.prototypes = {
    marca:PropTypes.string.isRequired,
    ano_lancamento:PropTypes.number.isRequired,
}

export default Item