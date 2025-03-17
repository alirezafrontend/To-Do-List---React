import Item from "./Item";

const Items = ({ items, updateItem, handleDelete , handleCheck }) => {
  console.log("items:", items);

  

  return (
    <div className="pb-[20px]">
      {items.map((item, i) => {
        return (
          <Item
            key={i}
            item={item}
            index={i}
            updateItem={updateItem}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        );
      })}
    </div>
  );
};

export default Items;
