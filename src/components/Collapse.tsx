import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
const Collapse = () => {
  const [isOpen, setIsOpen] = useState(Array(4).fill(true));

  const toggleCollapse = (index: number) => {
    const updatedOpenState = isOpen.map((state, i) =>
      i === index ? !state : true
    );
    setIsOpen(updatedOpenState);
  };

  return (
    <div className="flex flex-col w-full gap-6 cursor-pointer">
      {isOpen.map((state, index) => (
        <Bounce key={`collapse-${index + 1}`}>
          <div
            key={`collapse-${index + 1}`}
            className="border-b-[8px] text-[40px] p-6 rounded-3xl border-2 border-black bg-[#fffdf1] transition-all duration-300"
            onClick={() => toggleCollapse(index)}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold font-Gulfs text-[20px] md:text-[40px]">
                {index === 0 && "what is wild fox squad"}
                {index === 1 && "what are the benefits"}
                {index === 2 && "when does minting begin?"}
                {index === 3 && "how many nfts are available"}
              </h1>
              <div
                className={`flex items-center justify-center transform ${
                  state ? "rotate-0" : "rotate-180"
                } duration-300 transition-transform`}
              >
                <FaArrowDown color="black" size={20} />
              </div>
            </div>

            <motion.div
              style={{ overflow: "hidden" }}
              initial={state ? "open" : "collapsed"}
              animate={state ? "collapsed" : "open"}
              variants={{
                open: { height: "auto" },
                collapsed: { height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-medium text-gray-600 leading-1">
                {index === 0 &&
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                {index === 1 &&
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                {index === 2 &&
                  "Lorem ipsum dolor sit amet, consectetsur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                {index === 3 &&
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
              </p>
            </motion.div>
          </div>
        </Bounce>
      ))}
    </div>
  );
};

export default Collapse;
