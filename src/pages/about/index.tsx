import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-pink-500">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m Nuthan Harsha Vardhan Reddy — a passionate full-stack developer building powerful and beautiful digital experiences. I blend stunning frontends with robust backends using React, Next.js, Node.js, and more.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
