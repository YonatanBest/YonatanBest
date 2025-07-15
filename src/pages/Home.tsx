import {
    SiReact,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiDocker,
    SiGithub,
    SiJavascript,
    SiTypescript,
} from "react-icons/si";

const techs = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
];

const Home = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-700 opacity-20 rounded-full blur-3xl z-0" />
        <div className="z-10 flex flex-col items-center w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">Yonatan Yishak</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-blue-300">Full Stack Developer & Machine Learning Engineer</h2>
            <blockquote className="italic text-lg md:text-xl text-center text-blue-200 max-w-2xl mb-8 border-l-4 border-blue-500 pl-4">
                "Great things start from nothing."<br />
                <span className="text-base text-blue-100">Every big idea begins as a blank slate, full of endless possibilities.</span>
            </blockquote>
            {/* Important Tech stack icons */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
                {techs.map(({ name, icon: Icon, color }) => (
                    <div key={name} className="flex flex-col items-center group">
                        <Icon className={`${color} text-5xl transition-transform group-hover:scale-110`} title={name} />
                        <span className="text-xs mt-2 text-gray-200 tracking-wide">{name}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-6">
                <a href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-all text-lg">View Projects</a>
                <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-all text-lg">Contact Me</a>
            </div>
        </div>
    </section>
);
export default Home; 