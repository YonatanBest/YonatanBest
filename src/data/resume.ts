export const resume = {
  name: "Yonatan Yishak Yifat",
  title: "Incoming SWE Intern at Bloomberg",
  location: "Addis Ababa",
  email: "yonatanyishak111@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/yonatanyishakyifat",
    github: "https://github.com/YonatanBest",
    leetcode: "https://leetcode.com/u/YonatanBest",
  },
  education: [
    {
      school: "Addis Ababa University",
      location: "Addis Ababa",
      degree: "BSc. in Information Systems",
      graduation: "Sep 2023 - Jul 2027",
      details:
        "Relevant courses: OOP, Advanced Programming, Applied Mathematics, Advanced Database, DSA, Statistics, Discrete Mathematics, Information Storage and Retrieval, Event Driven Programming",
    },
    {
      school: "Africa to Silicon Valley",
      location: "Remote",
      degree: "Data Structures and Algorithms",
      graduation: "Aug 2024 - May 2025",
      details:
        "Solved 400+ LeetCode and Codeforces problems and spent 1000+ hours on math and algorithms.",
    },
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript", "Java", "Go"],
    software: ["Docker", "Git", "GitHub", "Linux", "VSCode", "Jupyter", "LaTeX"],
    frameworks: [
      "React",
      "Next.js",
      "FastAPI",
      "Flask",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Qdrant",
    ],
  },
  experience: [
    {
      title: "Machine Learning Engineer",
      company: "iCog Labs",
      location: "Addis Ababa",
      period: "Sep 2025 - Present",
      bullets: [
        "Engineered a context-aware RAG pipeline for MeTTa code with recursive dependency expansion for deeper structural context.",
        "Developed a query rewriting engine using conversation history to improve multi-turn retrieval relevance.",
        "Optimized retrieval thresholds and embedding model selection to reduce noise in the context window.",
        "Architected a backend with Redis/Lua rate limiting and zero-knowledge encryption for multi-provider API key management.",
        "Technical lead for intern-driven modules, including automated RAG evaluation with RAGAS and CI/CD testing pipelines.",
      ],
    },
    {
      title: "Machine Learning and Computer Vision Intern",
      company: "Pi School of AI",
      location: "Remote",
      period: "Oct 2025 - Jan 2026",
      bullets: [
        "Built a Google Street View API pipeline to acquire and process 55,000+ multi-angle images.",
        "Used BRISQUE to filter low-quality inputs for robust dataset creation.",
        "Experimented with YOLO architectures for object detection on commercial exterior features and signage.",
        "Developed a hybrid recognition system using EasyOCR and OpenAI Vision API verification.",
      ],
    },
    {
      title: "Software Engineering and Machine Learning Intern",
      company: "iCog Labs",
      location: "Addis Ababa",
      period: "Jan 2025 - Aug 2025",
      bullets: [
        "Integrated AMP training using PyTorch amp, reducing model training time by 30% without sacrificing performance.",
        "Implemented Bayesian hyperparameter tuning with Optuna and dynamic learning rate scheduling, leading to 43% faster convergence for PC-Transformer models.",
        "Replaced word-level tokenization with subword-level BPE, resulting in a 21% accuracy increase and better generalization.",
        "Refactored PC-Transformers for device-agnostic execution, resolving a critical CUDA mismatch issue.",
        "Synthesized and presented technical summaries of 10+ academic papers to inform project strategy.",
      ],
    },
    {
      title: "Machine Learning and AI Research Intern",
      company: "ThinkingBeyond",
      location: "Lund, Sweden",
      period: "Oct 2024 - Dec 2024",
      bullets: [
        "Designed and deployed 6+ modular TensorFlow training pipelines structured for reusability and testing.",
        "Automated the end-to-end experimentation pipeline, reducing manual setup errors by 40%.",
        "Benchmarked 5 optimization algorithms and surfaced performance insights for production systems.",
        "Collaborated on a CNN optimizer comparison paper and presented a finalist poster on system performance.",
      ],
    },
  ],
  projects: [
    {
      name: "AI Keystroke Predictor with Typing Sound",
      stack: ["Flask", "Random Forest", "Librosa"],
      period: "Sep 2024 - Dec 2024",
      bullets: [
        "Engineered an ML system to predict keystrokes from audio, targeting acoustic side-channel risks.",
        "Processed 5,531 labeled audio samples using Librosa to extract acoustic features.",
        "Trained a Random Forest classifier, achieving 98.55% accuracy.",
        "Developed a Flask web app to simulate inference risks in low-noise environments, tested with 50+ users.",
      ],
    },
    {
      name: "PixelPilot - Autonomous AI Agent",
      stack: ["Python", "PySide6", "Gemini", "Win32 API"],
      period: "Jan 2026 - Present",
      bullets: [
        "Developed a Windows desktop AI agent that executes natural-language tasks using Gemini, computer vision, and automation tools.",
        "Implemented a lazy vision stack with EasyOCR, OpenCV, and Robotics-ER to reduce unnecessary screenshots and improve UI perception.",
        "Introduced workspace isolation with an agent desktop, side-car preview, process tracking, voice input, and global hotkeys.",
      ],
    },
  ],
  activities: [
    "Reboot The Earth International Hackathon - Winner for building AgriLo, an AI assistant for smallholder farmers.",
    "OpenEPI X Unleash Open Data Hackathon - Team Lead, Top 3 globally and Grand Finale Winner in Kigali, Rwanda.",
    "IBM TechXchange Pre-Conference Watsonx Hackathon - Top 100 project score from 4000+ submissions.",
  ],
};
