import songBanner from '../image/SongBanner.png';

export function PlayingNowBanner() {
    return (
        <div>
            <div className="w-[325px] h-[375px] bg-white rounded-[10px] shadow-xl p-2 flex-col">
                <img src={songBanner} className="rounded-[8px]" />
            </div>
        </div>
    )
}
