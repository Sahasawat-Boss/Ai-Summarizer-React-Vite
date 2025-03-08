import React from "react";

import { logo } from "../assets";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <div className="flex justify-center items-center gap-0.5  hover:scale-105 transition hover:cursor-pointer">
                    <img src={logo} alt='logo' className='w-12' />
                    <p className="text-2xl text-center">AI-Summarizer <span className="text-sm">[Demo]</span></p>
                </div>


                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/Sahasawat-Boss", "_blank")
                    }
                    className='black_btn te'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                <p className="purple_gradient ">AI Summarizer</p>
                <span className='text-2xl'>OpenAI</span>
            </h1>
            <h2 className='desc'>
                Ai-Summarizer is an open-source tool that quickly transforms long articles into clear, concise summaries for easy reading
            </h2>
        </header>
    );
};

export default Hero;