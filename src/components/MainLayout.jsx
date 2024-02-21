import {SearchBar} from "./SearchBar";
import {PlayingNowBanner} from "./PlayingNowBanner";
import {SongList} from "./SongList";
import {useEffect, useRef, useState} from "react";
import {search} from "../requests/apiRequests";


export function MainLayout({ set }) {

    const [ imageUrl, setImageUrl ] = useState('');

    const [ result, setResult ] = useState([]);

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    useEffect(() => {
        search('danith sri').then(res => {

            const md5Image = res.data.data[selectedIndex].md5_image;
            const imageUrl = `https://e-cdns-images.dzcdn.net/images/cover/${md5Image}/500x500.jpg`;
            setImageUrl(imageUrl);

            setResult(res.data);

            set(res.data.data[selectedIndex].preview);

        }).catch(er => {
            console.log(er);
        })
    }, [selectedIndex]);

    return (
        <section className="w-9/12 mb-12">

            <SearchBar/>

            <div className="w-full mt-8 flex gap-8 max-lg:flex-col">
                <PlayingNowBanner img={imageUrl} />
                <SongList selectedIndex={selectedIndex} setIndex={setSelectedIndex} songList={result} />
            </div>

        </section>

    )
}
