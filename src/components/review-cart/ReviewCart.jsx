import PropTypes from 'prop-types';

const ReviewCart = ({ info }) => {
    const {name, review} = info;
    return (
        <div className="card w-1/4 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

ReviewCart.propTypes = {
    info: PropTypes.object
}

export default ReviewCart;