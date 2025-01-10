

import './Button.css'
import PropTypes from 'prop-types';

const Button = (props) => {
    return <button onClick={props.callApi}>
        Click to generate a joke.
    </button>;
}
Button.propTypes = {
    callApi: PropTypes.func.isRequired,
};
// Export Button Component
export default Button;