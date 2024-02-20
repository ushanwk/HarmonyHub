import songBanner from '../image/SongBanner.png';
import playIcon from '../image/Play.png';
import nextIcon from '../image/Next.png';
import backIcon from '../image/Back.png';
import shuffleIcon from '../image/Shuffle.png';
import listIcon from '../image/List.png';

export function PlayingNowBanner() {
    return (
        <div>
            <div className="w-[325px] bg-white rounded-[10px] shadow-xl p-2 flex-col max-xl:w-full">
                <img src={songBanner} className="rounded-[8px]" />

                <div className="h-14 w-full mt-2 flex justify-center items-center gap-5">
                    <img src={shuffleIcon} className="w-[25px]"/>
                    <img src={nextIcon} className="w-[25px] rotate-180"/>
                    <img src={playIcon} className="w-[25px]"/>
                    <img src={backIcon} className="w-[25px]"/>
                    <img src={listIcon} className="w-[25px]"/>
                </div>
            </div>
        </div>
    )
}
