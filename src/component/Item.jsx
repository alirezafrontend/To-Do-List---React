import { useEffect, useRef, useState } from "react";

const Item = ({ item, index, updateItem, handleDelete, handleCheck }) => {
  const [editedValue, setEditedValue] = useState(item.title);
  const [editMode, setEditMode] = useState(false);

  const focusInp = useRef(null);

  useEffect(() => {
    if (editMode && focusInp.current) {
      focusInp.current.focus();
    }
  }, [editMode]);

  function handleEdit() {
    if (editMode) {
      updateItem(index, { ...item, title: editedValue });
    }
    setEditMode(!editMode);
  }

  console.log("itemnnn:", item);

  return (
    <div className="w-full p-[25px] border-b-[2px] border-gray-300 flex justify-between">
      <div className="w-[85%] flex items-center gap-[10px]">
        <div className="flex">
          <div
            className={`flex justify-center items-center w-[25px] h-[25px] rounded-full cursor-pointer ${
              item.checked
                ? "bg-[#5730af] border-[1px] border-[#5730af]"
                : "bg-white border-[1px] border-gray-400"
            }`}
            onClick={() => handleCheck(index)}
          >
            {item.checked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex">
          {editMode ? (
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="border-none outline-none"
              ref={focusInp}
            />
          ) : (
            <h3
              className={`text-black text-[16px] ${
                item.checked ? "line-through text-gray-400" : ""
              }`}
            >
              {item.title}
            </h3>
          )}
        </div>
      </div>
      <div className="w-[15%] flex justify-end gap-[10px]">
        <span className="cursor-pointer" onClick={handleEdit}>
          {editMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#5730af]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#5730af]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          )}
        </span>
        <span className="cursor-pointer" onClick={() => handleDelete(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Item;
