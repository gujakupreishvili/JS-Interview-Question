import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import kaJson from "../../data/question/ka.json";

export default function Home() {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    if (openQuestionId === id) {
      setOpenQuestionId(null);
    } else {
      setOpenQuestionId(id);
    }
  };

  kaJson.map((item) => console.log(typeof item.answer));

  return (
    <>
      <div className="flex flex-col items-center gap-[30px]">
        {kaJson.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleQuestion(item.id)}
            className="flex flex-col justify-center z-30 px-[20px] py-[15px] cursor-pointer w-[80%] max-h-[250px] overflow-y-auto rounded-[10px] border-[1px] border-gray-600 bg-gray-800 hover:border-blue-300 hover:shadow-[0_0_20px_theme(colors.blue.300/0.4)] duration-200 group"
          >
            <div className="flex items-center justify-between">
              <p className="text-white group-hover:text-blue-300 duration-200">
                {item.question}
              </p>
              {openQuestionId === item.id ? (
                <IoIosArrowUp className="text-white" />
              ) : (
                <IoIosArrowDown className="text-white" />
              )}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-y-auto ${
                openQuestionId === item.id
                  ? "max-h-[550px] opacity-100 mt-[15px]"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="text-white group-hover:text-blue-100 whitespace-pre-line">
               {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-10 w-[50px] h-[40px] md:w-32 md:h-32 bg-gradient-to-br bg-blue-300 rounded-full blur-xl animate-pulse" />
    </>
  );
}
