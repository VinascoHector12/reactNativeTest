import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Saludar(props){
    //const { name = 'Usuario' } = props;
    const { name } = props;
    return(
        <Text>Hola { name }</Text>
    );
}


Saludar.defaultProps = {
    name: 'Usuario'
};

Saludar.propTypes = { 
    name: PropTypes.string.isRequired //Es de caracter obligatorio y notifica
}