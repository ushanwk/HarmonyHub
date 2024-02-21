import playIcon from '../assets/image/Play.png';
import nextIcon from '../assets/image/Next.png';
import backIcon from '../assets/image/Back.png';
import shuffleIcon from '../assets/image/Shuffle.png';
import listIcon from '../assets/image/List.png';
import banner from '../assets/image/SongBanner.png';

export function PlayingNowBanner({ img }) {

    return (
        <div>
            <div className="w-[325px] bg-white rounded-[10px] shadow-xl p-2 flex-col max-xl:w-full">
                <img src={img} className="rounded-[8px]" />

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
