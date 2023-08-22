import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // compositions
    return <div className={classes}>{props.children}</div> // wrapper component
}

export default Card;