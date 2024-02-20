import './App.css';
import {Header} from "./assets/components/Header";
import {MainLayout} from "./assets/components/MainLayout";

function App() {
    return (
        <div className="App w-full bg-[url('assets/image/Bg.png')] bg-cover flex items-center justify-center pb-[100px] pt-[100px]">

            <section
                className="w-[65%] pb-14 bg-white rounded-[20px] bg-[url('assets/image/SecBg.png')] bg-cover border-4 border-white shadow-xl">

                <Header />

                <section className="w-full flex justify-center mt-5">
                    <MainLayout />
                </section>

            </section>

        </div>
    );
}

export default App;
