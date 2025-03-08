
const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center mt-4 py-6 border-t border-gray-300  backdrop-blur">
            {/* Footer Text */}
            <p className="text-gray-900 text-sm text-center">
                © {new Date().getFullYear()} AI-Summarizer. Created by Sahasawat-Boss. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
                <a
                    href="https://github.com/Sahasawat-Boss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition hover:scale-110"
                >
                    My GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
