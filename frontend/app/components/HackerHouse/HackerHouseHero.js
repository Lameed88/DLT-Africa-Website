import Image from "next/image";
import Group1 from "../../../public/images/Group1.png";
import Group2 from "../../../public/images/Group2.png";
import Component23 from "../../../public/images/Component23.png";
import Component24 from "../../../public/images/Component24.png";
import Component242 from "../../../public/images/Component242.png";
import Component27 from "../../../public/images/Component27.png";
import Component28 from "../../../public/images/Component28.png";
import Component282 from "../../../public/images/Component282.png";
const HackerHouseHero = () => {
  return (
    <div className="font-serif lg:w-[1440px] md:w-[834px] h-[640px] bg-[#031700] flex-wrap justify-end overflow-auto ">
      <div className="flex justify-between ">
        <div className=" ">
          <img
            src="hackerheroleft.svg"
            className="lg:w-[374px] md:w-[187px] w-[93px] mr-4 animate-blink hidden md:block "
          />
        </div>

        <div className="">
          <img
            src="Group 155.png"
            alt="Group 155"
            className=" lg:w-[60px] md:w-[29.5px] w-[14px] absolute top-[162px] left-[482px] hidden lg:block"
          />
          <img
            src="Group 156.png"
            alt=""
            className="  lg:w-[95px] md:w-[47px] w-[24] absolute top-[164px] left-[874px] hidden lg:block"
          />

          <div className="gap-[10px] sm:mt-[87px] mt-[87px] sm:gap-[25px] ">
            <h2 className="text-[#F7FCFE] text-base md:text-[36px]  lg:text-[48px] font-[400px] flex justify-center gap-[10px] lg:mt-[209px] md:mt-[103px] mb-[10px] ">
              Hacker House
            </h2>

            <p className="text-[#FC7C13] text-base md:text-[18px] lg:text-[20px] font-[400px] font-DM Serif Display flex justify-center lg:mb-[35px] md:mb-[25px] ">
              sponsored by Lisk
            </p>

            <div className=" mt-[25px]">
              <p1 className=" gap-[50px] text-[#F7FCFE] text-base md:text-[18px] lg:text-[20px] font-[400px] flex justify-center opacity-0.75  lg:mb-[20px] md:mb-[10px]">
                Date: mattis 
              
              <div className=" mb-[15px] ">
              Location: mattismattis
              </div>
              </p1>
              <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:gap-[20px] md:gap-[10px]">
    <div class="text-[16px] border border-[#C54809] rounded-[10px] lg:w-[355px] md:w-[250px] p-[10px] h-[55px] text-center font-poppins font-bold text-[#F7FCFE] bg-[#FC7C13] hover:bg-[#f19d53] cursor-pointer mb-4 lg:mb-0">
        Sign up for Hacker House
    </div>
    <button class="border border-[#C54809] rounded-[10px] lg:w-[196px] md:w-[178px] p-[10px] h-[55px] text-center font-poppins font-bold text-[#C54809] hover:bg-[white] cursor-pointer">
        view agenda
    </button>
</div>

            </div>
          </div>
        </div>

        <div>
          <img
            src="hackerheroright.svg"
            className="lg:w-[374px] md:w-[187px] w-[93px] h-fit animate-blink hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HackerHouseHero;
