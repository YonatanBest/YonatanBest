export const resume = {
    name: "Yonatan Yishak Yifat",
    location: "Addis Ababa",
    email: "yonatanyishak111@gmail.com",
    links: {
        linkedin: "https://linkedin.com/in/yonatanyishakyifat",
        github: "https://github.com/YonatanBest",
        leetcode: "https://leetcode.com/u/YonatanBest"
    },
    education: [
        {
            school: "Addis Ababa University",
            location: "Addis Ababa",
            degree: "Bachelors of Science in Information Systems",
            graduation: "Expected Aug 2027"
        }
    ],
    skills: {
        languages: [
            "Intermediate Python (2yrs)",
            "Intermediate C++ (2yrs)",
            "Intermediate JavaScript (1yr)",
            "Beginner Java (1yr)"
        ],
        software: [
            "Docker", "Jupyter Notebook", "Git", "VSCode", "Linux", "GitHub", "LaTex"
        ],
        frameworks: [
            "Langchain", "Tensorflow", "Flask", "Pytorch", "React", "Scikit Learn", "Numpy", "Seaborn", "Pandas", "ngc-learn"
        ]
    },
    experience: [
        {
            title: "Machine Learning and NAC Intern",
            company: "iCog Labs",
            location: "Addis Ababa, AA",
            period: "Jan 2025 - Present",
            bullets: [
                "Integrated AMP training using PyTorch amp, reducing model training time by ~30% without sacrificing performance.",
                "Implemented Bayesian hyperparameter tuning with Optuna for PC-Transformer models, including dynamic learning rate scheduling and warm-up configuration, leading to faster convergence in training trials.",
                "Replaced word-level tokenization with subword-level BPE, resolving uncertainty in Transformer outputs and improving model generalization on rare tokens.",
                "Discovered and resolved device mismatch in PC-Transformers by refactoring for device-agnostic execution on CUDA.",
                "Documented research findings and presented technical summaries of 5+ academic papers"
            ]
        },
        {
            title: "Machine Learning and AI Research Intern",
            company: "ThinkingBeyond",
            location: "Skåne County, Lund",
            period: "Oct 2024 - Dec 2024",
            bullets: [
                "Earned a spot in the highly competitive program with an acceptance rate of only 10.7%",
                "Built and trained 6+ CNN models using TensorFlow on a 10,000-image dataset for binary classification (Cats vs. Dogs)",
                "Conducted comparative analysis of SGD, Adam, AdaGrad, AdaDelta, RMSprop & Nadam across 4 metrics",
                "Optimized learning rates and batch sizes, achieving 79.09% accuracy and 79.33% F1-score with AdaGrad",
                "Led dataset preprocessing, CNN architecture design, and reproducibility pipeline for peer-reviewed experimentation",
                "Collaborated on a paper titled A Comparative Analysis of Optimization Algorithms for Classification with CNN",
                "Designed a research poster, which was selected as a finalist"
            ]
        },
        {
            title: "Research and Data Analysis Intern",
            company: "Ethioware",
            location: "Addis Ababa, AA",
            period: "Jun 2024 - Aug 2024",
            bullets: [
                "Designed and deployed targeted surveys to collect high-quality, relevant data for ongoing AI research initiatives",
                "Engineered and cleaned over 200 raw datasets, improving data integrity and analysis reliability",
                "Built and validated multiple AI models using 19 selected features, extracting actionable insights for internal use",
                "Achieved 10% more accuracy for the model from the previous trained model"
            ]
        }
    ],
    projects: [
        {
            name: "AI Keystroke Predictor with Typing Sound",
            stack: ["Flask", "Random Forest", "Librosa"],
            period: "Sep 2024 - Dec 2024",
            bullets: [
                "Engineered ML system to predict keystrokes from audio, targeting vulnerabilities in acoustic side-channel attacks",
                "Processed 5,531 labeled audio samples using Librosa to extract relevant acoustic features",
                "Trained Random Forest classifier, achieving 98.55% accuracy",
                "Deployed a Flask-based web app to simulate and demonstrate real-world inference risks"
            ]
        },
        {
            name: "CodeAI – AI-Powered Code Generation Tool",
            stack: ["Flask", "IBM Watson AI", "Prompt Engineering"],
            period: "Oct 2024",
            bullets: [
                "Developed web app that uses IBM Watson's foundation models to generate code snippets from user-defined specs",
                "Designed a user-friendly Flask interface with secure prompt customization and dynamic language/framework support"
            ]
        },
        {
            name: "Time Series Prediction with LSTM and S4 (SSM)",
            stack: ["PyTorch", "NumPy", "Matplotlib"],
            period: "Apr 2025 - May 2024",
            bullets: [
                "Developed two deep learning models (5-layer LSTM and 5-layer S4) for multivariate climate forecasting",
                "Built cyclic temporal features and applied sequence modeling to predict mean temperature, humidity, and wind speed",
                "Achieved strong forecasting performance with S4, improving LSTM's MAE from 2.07°C to 1.60°C",
                "Visualized prediction trends vs. actual climate patterns; implemented scaling, sequence slicing, and temporal embeddings"
            ]
        }
    ],
    activities: [
        "Reboot The Earth International Hackathon - Finalist in hackathon after building AI model for climate farming suggestions (Jun 2024)",
        "Ethiopian Collegiate Programming Contest - Honorable Mention for problem-solving and algorithmic excellence (Oct 2024)",
        "IBM TechXchange Pre-Conference watsonx Hackathon - Top 100 project score from 4000+ submissions (Sep 2024 - Oct 2024)",
        "Ethiopian Statistical Service Technician - Contributed to the 2nd Agricultural Census with technical support (Aug 2024 - Sep 2024)"
    ]
}; 