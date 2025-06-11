'use client';
const educationTimeline = [
  {
    title: '10th Grade – CBSE Board',
    institution: 'New Era Senior Secondary School',
    duration: '2019 – 2020',
    description: 'Completed 10th standard, scoring 89.9%',
  },
  {
    title: '12th Grade – Intermediate CBSE',
    institution: 'Shannen Kidz CBSE',
    duration: '2020 – 2022',
    description: 'Specialized in Mathematics, Physics, and Chemistry. Scored 75%.',
  },
  {
    title: 'Bachelor of Technology – CSE',
    institution: 'Gandhi Institute of Technology and Management',
    duration: '2022 August – 2026 (On Going)',
    description: 'Graduated with a degree in Computer Science and Engineering. CGPA: 8.6.',
  },
  {
    title: 'Achievements',
    institution: '',
    duration: '',
    description: `🏆 2nd Place – Citizen-Hack Hackathon by Miracle Software Solution (2024)\n
🧠 Built AI-based prescription summarizer with lang-graph\n
💻 MERN stack portfolio projects and internships`,
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-20 px-6 text-white bg-black rounded-2xl w-full relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <h2 className="text-6xl text-gray-600 font-bold text-center mb-12">Education & Achievements</h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600 max-w-3xl mx-auto">
        {educationTimeline.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white dark:border-black" />
            <div className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-xl shadow-lg transition hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{item.institution}</p>
              <p className="text-sm text-blue-400 mb-2">{item.duration}</p>
              <p className="text-gray-200 whitespace-pre-line">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
