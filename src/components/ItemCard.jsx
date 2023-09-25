import PropTypes from "prop-types";

function ItemCard(props) {
  return (
    <div>
      <p>
        {props.title} {props.price}
      </p>
      <p>
        {props.rating.rate} ({props.rating.count})
      </p>
      <hr />
    </div>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.exact({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCard;
