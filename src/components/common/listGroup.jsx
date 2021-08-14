const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;

  return (
    <div className='col-3 p-5'>
      <ul className='list-group'>
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? 'list-group-item font-weight-bold active'
                : 'list-group-item font-weight-bold'
            }
            style={{ cursor: 'pointer' }}
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
