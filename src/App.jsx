import Hero from './components/Hero'
import Demo from './components/demo'
//import FontShowcase from './components/fontShowcase'; ===> <FontShowcase />

import './App.css';

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <div className="app">
                <Hero/>
                <Demo/>
            </div>
        </main>
    )
}

export default App