import ItemCount from './ItemCount';

export default function ItemDetail({item}) {
    const { title, price, pictureUrl, description, stock } = item;
    return (
      <div className="item-detail">
        <div className="item-detail-container">
          <div className="item-detail-child1">
            <img src={`${pictureUrl}`} alt={`${pictureUrl}`} />
          </div>
          <div className="item-detail-child2">
            <h2>{title}</h2>
            <h3>US$ {price}</h3>
            <ItemCount
              stock={stock}
              initial={1}
            />
            <p className="stock">Stock: {stock}</p>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    );
};
