import { useNavigate } from "react-router-dom";

import { logo } from "../assets";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-6 sm:mb-10 pt-3'>
                <div className="flex justify-center items-center gap-0.5  hover:scale-105 transition hover:cursor-pointer">
                    <img src={logo} alt='logo' className='w-10 sm:w-12' />
                    <p className="text-md sm:text-2xl text-center">AI-Summarizer</p>
                </div>

                <div>
                    {/* ✅ Navigate to Font Showcase Page */}
                    <button
                        className='text-[10px] sm:text-md hover:underline mr-1.5 sm:mr-4 hover:cursor-pointer underline-offset-2'
                        onClick={() => navigate("/FontPage")}
                    >
                        Font Showcase
                    </button>

                    <button
                        type='button'
                        onClick={() =>
                            window.open("https://github.com/Sahasawat-Boss", "_blank")
                        }
                        className='black_btn'
                    >
                        GitHub
                    </button>
                </div>
            </nav>

            {/* Title Section */}
            <h1 className='head_text'>
                <p className="purple_gradient ">AI Summarizer</p>
            </h1>
            <h2 className='mt-5 text-gray-800 sm:text-lg text-center max-w-xl'>
                Summarize entire web articles into clear, concise summaries.
            </h2>
            <h2 className=' text-gray-800 sm:text-lg text-center max-w-xl'>
                Simply paste a URL and get an easy-to-read summary in seconds!
            </h2>
        </header>
    );
};

export default Hero;