import { motion, AnimatePresence } from "framer-motion";

const Massage = ({ isMessage, message }) => {
  const messageText = () => {
    if (message === "Add") {
      return "New task was added!";
    } else if (message === "Edit") {
      return "Task edited successfully!";
    } else if (message === "Delete") {
      return "Task deleted successfully!";
    }
    return;
  };

  console.log(messageText);

  const backgroundColor =
    message === "Add"
      ? "#008000"
      : message === "Edit"
      ? "#2b2bb3"
      : message === "Delete"
      ? "#ad2525"
      : "";

  return (
    <div className="w-[95%]">
      <AnimatePresence>
        {isMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto flex justify-center items-center text-white p-[5px] rounded-[5px]"
            style={{ backgroundColor }}
          >
            <h4 className="text-[20px]">{messageText()}</h4>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Massage;
