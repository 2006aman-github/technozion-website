import React from "react";
import { data } from "./data";
import Day from "./Day";
import bg from "./music_bg.jpeg";
const Proshow = () => {

    return (
        <div className="pro_show_page_container min-h-screen pt-16 overflow-x-hidden" style={{ marginBottom: "50px" }}>
            <img src={bg} className='bg-img' alt='bg' />
            {data.map((day, index) => {
                return (
                    <div key={index} className=" pro_show_page_card_container flex-auto flex justify-center items-center flex-col">
                        <h2 className="Day-text text-center text-[#f4d4d8] font-bold my-2">Day {index + 1}</h2>
                        <Day key={index} data={day} />
                    </div>
                );
            })}
        </div>
    )
}
export default Proshow;