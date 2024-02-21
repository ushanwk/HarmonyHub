import rate from '../assets/image/Rate.png';
import songs from "../assets/sample-songs";
import {useEffect, useState} from "react";

export function SongList({selectedIndex, songList, setIndex}) {

    const [selectedSong, setSelectedSong] = useState(selectedIndex);

    const toggleClickSongs = (index) => {
        setSelectedSong(index);
        setIndex(index);
    }

    useEffect(() => {
        console.log(songList)
    }, [songList]);

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="flex flex-col mt-2">
                    <h1 className="text-[40px] font-bold max-2xl:text-[30px]">
                        {
                            songList.length === 0 ? <p>Loading</p> : songList.data[selectedSong].title_short.slice(0,14) + '...'
                        }
                    </h1>

                    <div className="flex gap-5">
                        <p className="font-bold max-2xl:text-[10px]">
                            {
                                songList.length === 0 ? null : songList.data[selectedSong].artist.name.slice(0,15) + '...'
                            }
                        </p>
                        <p className="text-[12px] max-2xl:text-[10px] max-2xl:mt-0 mt-1 font-semibold opacity-50">
                            {
                                songList.length === 0 ? null : songList.data[selectedSong].album.title.slice(0,15) + '...'
                            }
                        </p>
                    </div>
                </div>

                <div className="flex-col max-2xl:mt-3 max-xl:hidden max-lg:block">
                    <h1 className="text-[50px] max-2xl:text-[30px] font-black">
                        {
                            songList.length === 0 ? <p></p> : <p>5.0</p>
                        }
                    </h1>
                    <img src={rate} className="w-[80px] max-2xl:w-[50px]"/>
                </div>
            </div>

            <div className="mt-7 w-full">

                {
                    songList.length === 0 ? <p>Loading</p> : (
                        songList.data.map((s, index) => (
                            index<7 && (
                                <div
                                    className={`flex justify-between items-center py-1 px-4 rounded-[6px] mt-1 border-2 border-transparent hover:border-white ${selectedSong === index ? 'bg-black text-white' : undefined}`}
                                    onClick={() => toggleClickSongs(index)}
                                    key={index}
                                >
                                    <div className="flex gap-4">
                                        <h1 className="font-semibold text-[14px]">{index + 1}</h1>
                                        <h1 className="font-semibold text-[14px]">{s.title_short}</h1>
                                    </div>
                                    <h1 className="font-semibold text-[14px]">4:50</h1>
                                </div>
                            )
                        ))
                    )
                }

            </div>
        </div>
    )
}
