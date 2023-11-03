import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-[#FBBF2D] md:min-h-[700px] min-h-[500px]">
      <div className="w-full max-w-[1440px] flex items-center justify-center text-center leading-1 flex-col">
        <Bounce>
          <h1 className="md:text-[100px] lg:text-[130px] text-[60px] text-red-500 font-Gulfs text-shadow1">
            SNEAKY <span className="text-white">KITTENS</span>
          </h1>
        </Bounce>
        <div className="flex items-center justify-center w-full gap-2 mb-3">
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          >
            <FaTwitter />
            Twitter
          </a>{" "}
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          >
            <FaDiscord />
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
