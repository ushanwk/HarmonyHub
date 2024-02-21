import search from '../assets/image/Search.png';
import {useState} from "react";
import {tabName} from "../assets/consts/tabs";

export function SearchBar() {

    const [ selectedTab, setSelectedTab ] = useState(5);


    const [searchValue, setSearchValue] = useState('');
    const handleKeyDownSearch = (event) => {
        if (event.key === 'Enter') {

        }
    };

    return (
        <div className="flex gap-5 justify-between max-xl:flex-col">
            <div className="flex items-center bg-white w-[325px] p-1 pl-3 rounded-[10px] gap-2 border-[1px] max-xl:w-full">
                <img src={search} className="w-4 h-4 opacity-40"/>
                <input
                    className="p-1 text-[13px] w-[300px] border border-white focus:outline-none focus:border-white sm:text-sm hover:border-transparent"
                    type="text" placeholder="Search for song, artist etc..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDownSearch}
                />
            </div>

            <div className="flex gap-2">

                {
                    tabName.map((name, index) => (
                        <div
                            className={`flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 max-xl:h-[50px] max-xl:w-full ${selectedTab == index ? 'border-[2px]' : undefined}`}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                        >
                            <p className="text-[12px] opacity-40 font-semibold cursor-default">{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
