import './App.css';
import {Header} from "./assets/components/Header";
import {MainLayout} from "./assets/components/MainLayout";

import AudioPlayer from "react-h5-audio-player";
import './assets/mp3player/player.css';

function App() {
    return (
        <div className="App w-full bg-[url('assets/image/Bg.png')] bg-cover flex items-center justify-center pb-[50px] pt-[50px]">

            <section
                className="w-[65%] bg-white rounded-[20px] bg-[url('assets/image/SecBg.png')] bg-cover border-4 border-white shadow-xl">

                <Header/>

                <section className="w-full flex justify-center mt-5">
                    <MainLayout/>
                </section>

                <section className="w-full">
                    <AudioPlayer
                        src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
                        autoPlay={true}
                    />
                </section>

            </section>

        </div>
    );
}

export default App;
