import search from '../image/Search.png';

export function SearchBar() {
    return (
        <div className="flex gap-5 justify-between max-xl:flex-col">
            <div className="flex items-center bg-white w-[325px] p-1 pl-3 rounded-[10px] gap-2 border-[1px] max-xl:w-full">
                <img src={search} className="w-4 h-4 opacity-40"/>
                <input
                    className="p-1 text-[13px] w-[300px] border border-white focus:outline-none focus:border-white sm:text-sm hover:border-transparent"
                    type="text" placeholder="Search for song, artist etc..."/>
            </div>

            <div className="flex gap-2">
                <div
                    className="flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 hover:border-[1px] max-xl:h-[50px] max-xl:w-full">
                    <p className="text-[12px] opacity-40 font-semibold cursor-default">Song</p>
                </div>

                <div
                    className="flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 hover:border-[1px] max-xl:h-[50px] max-xl:w-full">
                    <p className="text-[12px] opacity-40 font-semibold cursor-default">Artist</p>
                </div>

                <div
                    className="flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 hover:border-[1px] max-xl:h-[50px] max-xl:w-full">
                    <p className="text-[12px] opacity-40 font-semibold cursor-default">Album</p>
                </div>

                <div
                    className="flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 hover:border-[1px] max-xl:h-[50px] max-xl:w-full">
                    <p className="text-[12px] opacity-40 font-semibold cursor-default">Playlist</p>
                </div>
            </div>
        </div>
    )
}
