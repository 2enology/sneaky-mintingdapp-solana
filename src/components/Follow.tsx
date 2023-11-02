import { FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";

export default function Follow() {
  return (
    <div
      className="flex items-center justify-center w-full mb-10"
      id="followus"
    >
      <div className="w-full flex justify-center p-[5px] max-w-[1340px] flex-col">
        <div className="flex flex-col w-full mt-10">
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-[#FFFDF1] text-shadow1">
              FOLLOW US
            </span>{" "}
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-black">
              ON SOCIAL
            </span>{" "}
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-black">
              MEDIA
            </span>{" "}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700">
            <FaTwitter size={30} />
          </div>
          <div className="p-3 border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700">
            <FaDiscord size={30} />
          </div>
          <div className="p-3 border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700">
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
