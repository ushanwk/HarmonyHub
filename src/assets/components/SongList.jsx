import rate from '../image/Rate.png';

export function SongList() {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="flex flex-col mt-2">
                    <h1 className="text-[40px] font-bold max-2xl:text-[30px]">Calm Down.</h1>

                    <div className="flex gap-5">
                        <p className="font-bold max-2xl:text-[10px]">Rema</p>
                        <p className="text-[12px] max-2xl:text-[10px] max-2xl:mt-0 mt-1 font-semibold opacity-50">2022</p>
                        <p className="text-[12px] max-2xl:text-[10px] max-2xl:mt-0 mt-1 font-semibold opacity-50">Rave & Roses</p>
                    </div>
                </div>

                <div className="flex-col max-2xl:mt-3 max-xl:hidden max-lg:block">
                    <h1 className="text-[50px] max-2xl:text-[30px] font-black">5.0</h1>
                    <img src={rate} className="w-[80px] max-2xl:w-[50px]"/>
                </div>
            </div>


        </div>
    )
}
