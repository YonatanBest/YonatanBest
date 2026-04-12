export type Project = {
  name: string;
  period: string;
  eyebrow: string;
  description: string;
  impact: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "PixelPilot",
    period: "Jan 2026 - Present",
    eyebrow: "Autonomous AI Agent",
    description:
      "Windows desktop AI agent that executes natural-language tasks with Gemini, computer vision, automation tools, voice input, global hotkeys, and workspace isolation.",
    impact:
      "Built the agent desktop, lazy vision stack, side-car preview, and process tracking for safer computer control.",
    tech: ["Python", "PySide6", "Gemini", "Win32 API", "OpenCV", "EasyOCR"],
    github: "https://github.com/AlphaTechsx/PixelPilot",
    demo: "https://pixelpilotai.vercel.app/",
  },
  {
    name: "AI Keystroke Predictor",
    period: "Sep 2024 - Dec 2024",
    eyebrow: "Acoustic Side-Channel ML",
    description:
      "Machine learning system that predicts keystrokes from typing audio and demonstrates inference risks in low-noise environments.",
    impact:
      "Processed 5,531 labeled audio samples, extracted Librosa features, trained a Random Forest classifier, and reached 98.55% accuracy.",
    tech: ["Python", "Flask", "Random Forest", "Librosa"],
    github: "https://github.com/YonatanBest/AI-Keystroke-Predictor-with-Typing-Sound",
  },
];
