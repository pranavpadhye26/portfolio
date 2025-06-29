"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* USC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-green-400">
              University of Southern California, Los Angeles, CA
            </h3>
            <ul className="mt-2 text-gray-400 space-y-1">
              <li>• Masters in Computer Science (Artificial Intelligence)</li>
              <li>• Aug 2024 – May 2026</li>
              <li>• GPA: 3.35</li>
            </ul>
          </motion.div>

          {/* TCET */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-green-400">
              Thakur College of Engineering and Technology, Mumbai, India
            </h3>
            <ul className="mt-2 text-gray-400 space-y-1">
              <li>• Bachelors of Engineering in Computer Engineering</li>
              <li>• Aug 2021 – Jul 2024</li>
              <li>• GPA: 3.9</li>
            </ul>
          </motion.div>

          {/* Thakur Polytechnic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-green-400">
              Thakur Polytechnic Mumbai, India
            </h3>
            <ul className="mt-2 text-gray-400 space-y-1">
              <li>• Diploma in Computer Engineering</li>
              <li>• Aug 2018 – Aug 2021</li>
              <li>• GPA: 4.0</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
