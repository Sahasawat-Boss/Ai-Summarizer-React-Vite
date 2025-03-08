
const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center mt-2 py-6 backdrop-blur ">
            {/* Footer Text */}
            <p className="text-gray-900 text-sm text-center">
                © {new Date().getFullYear()} AI-Summarizer. Created by Sahasawat-Boss. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
