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
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "FindMySpot- AI Powered Parking Management System",
              description:
                "AI-powered smart parking system using MERN and Computer Vision, serving 1,000+ users in real time.",
              details: [
                "Devised a real-time information system using MERN Stack (MongoDB, React JS, Express, Node JS) allowing 1000+ active users to access current parking space availability, enabling users to swiftly locate and reserve parking spots through a user-friendly mobile application",
                "Executed advanced Machine Learning algorithms and Deep Learning Techniques along with A* Search and Computer Vision to optimize allocation of parking spaces, enhancing efficiency and effectiveness of parking facilities",
              ],
              tech: [
                "React JS",
                "Node JS & Express JS",
                "MongoDB",
                "Python",
                "Machine Learning",
                "Image Processing",
                "Computer Vision",
              ],
            },
            {
              title: "ContentIQ - Content Personalization Platform",
              description:
                "Built an AI-driven content personalization platform to optimize recommendations, boost engagement, and improve retention",
              details: [
                "Developed a content optimization engine that personalized recommendations based on user behaviour, improving content discovery by 40%",
                "Implemented machine learning algorithms to analyse user interactions and optimize trending content delivery.",
                "Enhanced real-time analytics for immediate content adjustments, boosting user satisfaction.",
                "Optimized video compression and loading times, increasing user retention by 20%.",
              ],
              tech: [
                "Python",
                "TensorFlow",
                "Sci-Kit Learn",
                "OpenCV",
                "Django",
                "PostgreSQL",
              ],
            },
            {
              title: "BeatBuddy- Music Recommendation System",
              description:
                "Built a content-based music recommendation system using ML and clustering to deliver personalized song suggestions.",
              details: [
                "A content-based filtering MRS project constructed using Spotify dataset to provide tailored song recommendations to users.",
                "Performed K-Means clustering algorithm to filter songs according to users taste and managed to achieve 96% model accuracy.",
              ],
              tech: [
                "Python",
                "Machine Learning",
                "Pandas",
                "NumPy",
                "Scikit-learn",
              ],
            },
            {
              title: "Sign to Speech Convertor",
              description:
                "Built a sign language recognition system using flex sensors to convert hand signs into speech for assistive communication.",
              details: [
                "Sign to Speech Converter is an innovative application designed to empower and facilitate communication for deaf and mute individuals.",
                "Integrated flex sensors into app to accurately capture and interpret hand signs done by users",
                "Develop a robust sign language recognition system to identify and differentiate between various hand signs, forming foundation for accurate speech conversion.",
              ],
              tech: ["C++", "Arduino Uno", "Flex Sensors"],
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
