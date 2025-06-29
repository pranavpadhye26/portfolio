"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono">
            <p className="text-green-500">$ whoami</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Pranav Padhye
            </h1>
            <p className="text-gray-400 mb-2">
              Full Stack Developer / AI Engineer
            </p>
            <p className="text-green-500">$ skills</p>

            {/* Frontend */}
            <div className="mt-2">
              <p className="text-gray-300 mb-1">Frontend</p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge label="React.js" />
                <SkillBadge label="Angular.js" />
                <SkillBadge label="Electron.js" />
              </div>
            </div>

            {/* Backend */}
            <div className="mt-4">
              <p className="text-gray-300 mb-1">Backend</p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge label="Python" />
                <SkillBadge label="Django" />
                <SkillBadge label="Node.js" />
                <SkillBadge label="Express.js" />
                <SkillBadge label="REST APIs" />
                <SkillBadge label="WebSockets" />
              </div>
            </div>

            {/* AI/ML */}
            <div className="mt-4">
              <p className="text-gray-300 mb-1">AI / ML</p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge label="Azure OpenAI" />
                <SkillBadge label="scikit-learn" />
                <SkillBadge label="TensorFlow" />
                <SkillBadge label="OpenCV" />
                <SkillBadge label="Pandas" />
                <SkillBadge label="NumPy" />
                <SkillBadge label="NLTK" />
                <SkillBadge label="LLM's" />
              </div>
            </div>

            {/* Databases */}
            <div className="mt-4">
              <p className="text-gray-300 mb-1">Databases</p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge label="PostgreSQL" />
                <SkillBadge label="MongoDB" />
                <SkillBadge label="Redis" />
              </div>
            </div>

            {/* DevOps / Tools */}
            <div className="mt-4">
              <p className="text-gray-300 mb-1">DevOps / Tools</p>
              <div className="flex flex-wrap gap-2">
                <SkillBadge label="Docker" />
                <SkillBadge label="RabbitMQ" />
                <SkillBadge label="Camunda BPMN" />
                <SkillBadge label="AWS" />
                <SkillBadge label="Git" />
                <SkillBadge label="Selenium" />
                <SkillBadge label="Bitbucket" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
      {label}
    </span>
  );
}
