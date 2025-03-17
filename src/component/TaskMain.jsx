import Header from "./Header";
import Massage from "./Massage";
import AddItems from "./AddItems";
import Selected from "./Selected";
import Items from "./Items";
import { useEffect, useRef, useState } from "react";

const TaskMain = () => {
  const [titleItem, setTitleItem] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("All");

  const [items, setItems] = useState(() => {
    const LocalData = localStorage.getItem("tasks");
    return LocalData ? JSON.parse(LocalData) : [];
  });

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(items));
    }
  }, [items]);

  const inputFocus = useRef(null);

  const filteredItems = items.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Complete") return item.checked;
    if (filter === "Incomplete") return !item.checked;
    return;
  });

  function handlefilter(e) {
    setFilter(e.target.value);
  }

  function handleCheck(index) {
    const updateItems = items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );

    setItems(updateItems);
    setMessage("checked");
  }

  function handleItemChange(e) {
    setTitleItem(e.target.value);
  }

  function handleSubmitItem() {
    if (titleItem.trim() === "") return;
    setItems([...items, { title: titleItem, checked: false }]);
    setTitleItem("");
    showMessage("Add");

    inputFocus.current?.focus();
  }

  function updateItem(index, newValue) {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
    showMessage("Edit");
  }

  function handleDelete(index) {
    const LocalItem = items.filter((_, i) => i !== index);
    setItems(LocalItem);
    localStorage.setItem("tasks", JSON.stringify(LocalItem));
    showMessage("Delete");
  }

  useEffect(() => {
    if (isMessage) {
      const timer = setTimeout(() => {
        setIsMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMessage]);

  function showMessage(msg) {
    setMessage(msg);
    setIsMessage(true); // این خط باعث اجرای useEffect می‌شود
  }

  return (
    <div className="w-[95%] h-auto xl:w-[50%] bg-white rounded-xl">
      <Header />
      <div
        className="p-[30px]"
        style={items.length > 0 ? { borderBottom: "3px solid #5730af" } : {}}
      >
        <Massage isMessage={isMessage} message={message} />
        <AddItems
          titleItem={titleItem}
          handleItemChange={handleItemChange}
          handleSubmitItem={handleSubmitItem}
          inputFocus={inputFocus}
        />
        <Selected handlefilter={handlefilter} />
      </div>
      <div>
        <Items
          items={filteredItems}
          updateItem={updateItem}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
};

export default TaskMain;
