import './ListItems.css';

function ListItem(props) {
    return (
        <li className='list-item'>{props.text}</li>
    );
};

export default ListItem;