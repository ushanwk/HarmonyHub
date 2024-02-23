import './App.css';
import {Header} from "./components/Header";
import {MainLayout} from "./components/MainLayout";

import AudioPlayer from "react-h5-audio-player";
import './assets/mp3player/player.css';
import {useState} from "react";

function App() {

    const [ song, setSong ] = useState('');

    return (
        <div className="App w-full bg-[url('assets/image/Bg.png')] bg-cover flex items-center justify-center pb-[110px] pt-[50px]">

            <section
                className="w-[65%] bg-white rounded-[20px] bg-[url('assets/image/SecBg.png')] bg-cover border-4 border-white shadow-xl">

                <Header />

                <section className="w-full flex justify-center mt-5">
                    <MainLayout set={setSong} />
                </section>

                <section className="w-full flex items-center justify-center border-t-4 border-white pt-2">
                    <AudioPlayer
                        src={song}
                        autoPlay={true}
                    />
                </section>

            </section>

        </div>
    );
}

export default App;
