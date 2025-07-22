import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make AI technology accessible and helpful for everyone, providing intelligent solutions that enhance productivity and creativity.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in ethical AI development, user privacy, and creating technology that genuinely improves peoples lives.'
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'To be the leading platform for conversational AI, setting new standards for intelligence, safety, and user experience.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      description: 'AI researcher with 10+ years in machine learning and natural language processing.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      description: 'Former Google engineer specializing in large language models and distributed systems.',
      image: '👩‍💻'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of AI',
      description: 'PhD in Computer Science with expertise in conversational AI and neural networks.',
      image: '👨‍🔬'
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      description: 'Product strategist focused on user experience and AI ethics.',
      image: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Our Company</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're passionate about creating AI technology that empowers individuals and businesses 
              to achieve more through intelligent conversation and assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023, our company emerged from a simple belief: artificial intelligence 
                  should be accessible, helpful, and safe for everyone. What started as a research 
                  project has grown into a platform trusted by thousands of users worldwide.
                </p>
                <p>
                  Our team of experienced AI researchers, engineers, and designers work tirelessly 
                  to create conversational AI that not only understands what you're asking but 
                  truly helps you achieve your goals.
                </p>
                <p>
                  We're committed to responsible AI development, ensuring our technology is built 
                  with transparency, fairness, and user privacy at its core.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-primary-100 rounded-lg p-8 text-center">
                <Users className="h-24 w-24 text-primary-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core principles and commitment to our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <value.icon className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our AI chatbot platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '50K+', label: 'Conversations' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;