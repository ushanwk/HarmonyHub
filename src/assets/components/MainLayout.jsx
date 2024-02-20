import {SearchBar} from "./SearchBar";
import {PlayingNowBanner} from "./PlayingNowBanner";
import {SongList} from "./SongList";


export function MainLayout() {
    return (
        <section className="w-9/12 mb-12">

            <SearchBar/>

            <div className="w-full mt-8 flex gap-8 max-lg:flex-col">
                <PlayingNowBanner/>
                <SongList/>
            </div>

        </section>

    )
}
