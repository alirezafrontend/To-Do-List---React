const AddItems = ({
  handleItemChange,
  handleSubmitItem,
  titleItem,
  inputFocus,
}) => {
  return (
    <div className="w-full h-[90px] flex justify-between py-[20px]">
      <div className="w-[82%]">
        <input
          value={titleItem}
          ref={inputFocus}
          onChange={(e) => handleItemChange(e)}
          className="w-full h-full px-[10px] outline-none border-b-[2px] border-solid border-b-gray-200 placeholder-[#00000053]"
          type="text"
          placeholder="Enter new task"
        />
      </div>
      <div className="w-[16%]">
        <button
          onClick={handleSubmitItem}
          className="w-full h-full text-white text-[18px] rounded-[8px] bg-[#5730af]"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItems;
