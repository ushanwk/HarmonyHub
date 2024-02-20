import rate from '../image/Rate.png';
import songs from "../sample-songs";
import {useState} from "react";

export function SongList() {

    const [selectedSong, setSelectedSong] = useState(0);
    const toggleClickSongs = (index) => {
        setSelectedSong(index);
        console.log(selectedSong)
    }

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="flex flex-col mt-2">
                    <h1 className="text-[40px] font-bold max-2xl:text-[30px]">Calm Down.</h1>

                    <div className="flex gap-5">
                        <p className="font-bold max-2xl:text-[10px]">Rema</p>
                        <p className="text-[12px] max-2xl:text-[10px] max-2xl:mt-0 mt-1 font-semibold opacity-50">2022</p>
                        <p className="text-[12px] max-2xl:text-[10px] max-2xl:mt-0 mt-1 font-semibold opacity-50">Rave &
                            Roses</p>
                    </div>
                </div>

                <div className="flex-col max-2xl:mt-3 max-xl:hidden max-lg:block">
                    <h1 className="text-[50px] max-2xl:text-[30px] font-black">5.0</h1>
                    <img src={rate} className="w-[80px] max-2xl:w-[50px]"/>
                </div>
            </div>

            <div className="mt-7 w-full">

                {
                    songs.map((s, index) => (
                        <div
                            className={`flex justify-between items-center py-1 px-4 rounded-[6px] mt-1 border-2 border-transparent hover:border-white ${selectedSong === index ? 'bg-black text-white' : undefined}`}
                            onClick={() => toggleClickSongs(index)}
                        >
                            <div className="flex gap-4">
                                <h1 className="font-semibold text-[14px]">{index + 1}</h1>
                                <h1 className="font-semibold text-[14px]">Calm Down</h1>
                            </div>

                            <h1 className="font-semibold text-[14px]">4:50</h1>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
