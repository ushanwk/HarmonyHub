import './App.css';
import {Header} from "./assets/components/Header";

function App() {
    return (
        <div className="App h-[100vh] w-full bg-[url('assets/image/Bg.png')] flex items-center justify-center">

            <section
                className="w-[65%] h-[700px] bg-white rounded-[20px] bg-[url('assets/image/SecBg.png')] bg-cover border-4 border-white shadow-xl">

                <Header />

            </section>

        </div>
    );
}

export default App;
