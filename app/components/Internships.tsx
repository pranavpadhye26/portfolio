"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Internship Experiences
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Full Stack Development Intern | Leaniar, Irvine CA",
              description: "",
              details: [
                "Developed a Django REST Framework automation platform, increasing test coverage and efficiency across ERP, CRM, and LIMS systems",
                "Built and deployed APIs for automated Selenium script generation and dynamic LLVM tuning, improving workflow execution speed by 30% through SAP API integration and RabbitMQ-based job scheduling",
                "Engineered a privacy-conscious Electron.js desktop application with real-time WebSocket communication, supporting over 1,000 concurrent users. Integrated Redis to optimize session management and caching",
                "Lead Angular front-end integration with backend services to streamline UI-API interaction and enhance application performance.",
              ],
              tech: [
                "Django",
                "Angular.js",
                "Electron.js",
                "Redis",
                "Docker",
                "PostgreSQL",
                "Selenium/Playwright",
                "UiPath",
                "Atlassian Bitbucket",
              ],
            },
            {
              title:
                "Research Assistant | USC's Keck School of Medicine, Los Angeles, CA",
              description: "",
              details: [
                "Developed authentication features for a Next-Generation HIV Drug Resistance Testing application, including login and registration pages in React, NumPy, Pytorch and TensorFlow for Data Preprocessing and NLP, CSRF token-based security, and PostgreSQL integration using Django for backend data management",
                "Built and connected a PostgreSQL database to Django, creating 3+ views to support secure data handling for HIV gene sequence analysis, facilitating machine learning-based result storage and retrieval",
              ],
              tech: [
                "Python",
                "Django",
                "React.js",
                "Node.js",
                "Machine Learning",
                "PostgreSQL",
                "AWS",
              ],
            },
            {
              title: "Software Development Intern | Pragmatiq Inc, Remote",
              description: "",
              details: [
                "Led the development of a custom workflow management system, crafting dynamic and responsive UI components in ReactJS to enable seamless user interaction and real-time updates",
                "Integrated business logic using Camunda Modeler by designing BPMN-driven workflows that automated complex, multi-step company operations with clear audit trails, reducing manual task handling time by 30%",
                "Hands-on experience with the PERN stack (PostgreSQL, Express.js, React, Node.js), building scalable backend APIs and interactive frontend dashboards. Leveraged Camunda BPM for robust orchestration of process automation",
              ],
              tech: [
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Camunda BPM",
                "Camunda Modeler",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
