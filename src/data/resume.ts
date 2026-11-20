export const resume = {
  name: "Yonatan Yishak Yifat",
  title: "Machine Learning Researcher at iCog Labs",
  location: "Addis Ababa, Ethiopia",
  focus: {
    name: "Associative memory",
    description: "I study how continuous Hopfield networks store and retrieve patterns. My work explores when a network should add a new memory prototype, update an existing one, or prune one it rarely uses.",
  },
  email: "yonatanyishak111@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/yonatanyishakyifat",
    github: "https://github.com/YonatanBest",
    leetcode: "https://leetcode.com/u/YonatanBest",
  },
  education: [
    {
      school: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      degree: "Bachelor of Science in Information Systems",
      graduation: "Sep 2023 - Jun 2027 (expected)",
      details: "I’m currently studying artificial intelligence and human-computer interaction. My coursework includes object-oriented and advanced programming, advanced databases, data structures and algorithms, applied mathematics, discrete mathematics and combinatorics, and statistics.",
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
  additionalStudy: [
    "Stanford Machine Learning Specialization, covering supervised and unsupervised learning, recommender systems, and reinforcement learning",
    "Mathematics for Machine Learning and Data Science Specialization",
    "BlueDot Impact Technical AI Safety program",
  ],
  skills: {
    Languages: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "LaTeX"],
    "Tools and systems": ["Qdrant", "PostgreSQL", "Redis", "MongoDB", "Docker", "Git", "Linux", "Distributed systems"],
    "Frameworks and libraries": ["FastAPI", "PyTorch", "TensorFlow", "scikit-learn", "React"],
  },
  experience: [
    {
      title: "Machine Learning Researcher",
      company: "iCog Labs",
      period: "Oct 2026 - Present",
      bullets: [
        "Developed a Kalman-momentum update for continuous Hopfield networks that improved associative memory retrieval accuracy by 10%.",
        "Reduced memory size by 47% by adding prototypes when uncertainty was high and pruning those with little support.",
        "Designed an update rule that lets each prototype learn according to its similarity to an input, its uncertainty, and its momentum.",
      ],
    },
    {
      title: "Campus Co-Lead & Event Organizer",
      company: "Hult Prize at Addis Ababa University",
      period: "Sep 2026 - Present",
      bullets: [
        "Co-led the campus social entrepreneurship competition. Our volunteer team reached more than 400 students and recruited over 20 startup teams.",
        "Led workshops on problem-solving, business development, and pitching to help student founders prepare for competition.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Bloomberg L.P.",
      location: "London, UK",
      period: "Jun 2026 - Sep 2026",
      bullets: [
        "Rebuilt a real-time valuation system as a stateless daily batch pipeline, cutting emergency recomputation from 10 hours to minutes.",
        "Recomputed more than 140,000 records each day using the latest calculation multipliers.",
        "Automated a 22-step service process and streamlined communication between teams, reducing manual work by 75%.",
      ],
    },
    {
      title: "Software Engineer",
      company: "iCog Labs",
      location: "Addis Ababa, Ethiopia",
      period: "Sep 2025 - May 2026",
      bullets: [
        "Built a retrieval-augmented coding assistant that helped more than 30 developers find MeTTa code and documentation.",
        "Improved code retrieval Precision@5 by 12% using Qdrant vector search and recursive dependency expansion.",
        "Raised Recall@5 by 23% across 10 multi-turn test conversations by rewriting queries with chat history stored in MongoDB.",
        "Improved response relevance by 50% by benchmarking embedding models and tuning similarity thresholds.",
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
        "Improved detection precision for commercial building features and signs by 20% by benchmarking and fine-tuning YOLOv5 and YOLOv7.",
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
