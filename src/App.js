import './App.css';
import {Header} from "./assets/components/Header";
import {MainLayout} from "./assets/components/MainLayout";

function App() {
    return (
        <div className="App h-[100vh] w-full bg-[url('assets/image/Bg.png')] flex items-center justify-center">

            <section
                className="w-[65%] h-[700px] bg-white rounded-[20px] bg-[url('assets/image/SecBg.png')] bg-cover border-4 border-white shadow-xl">

                <Header />

                <section className="w-full h-[450px] flex justify-center mt-5">
                    <MainLayout />
                </section>

            </section>

        </div>
    );
}

export default App;
