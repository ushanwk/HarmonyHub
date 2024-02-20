import {SearchBar} from "./SearchBar";
import {PlayingNowBanner} from "./PlayingNowBanner";

export function MainLayout() {
    return (
        <section className="w-9/12">

            <SearchBar />

            <div className="w-full mt-8 flex gap-10">
                <PlayingNowBanner />
            </div>

        </section>
    )
}
