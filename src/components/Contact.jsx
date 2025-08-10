import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Model3D from './Model3D';

const Contact = () => {
    const [ref, isInView] = useInView();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'junaid68555@gmail.com',
            href: 'mailto:junaid68555@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8431102124',
            href: 'tel:+918431102124',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Bengaluru, India',
            href: '#',
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { name, email, subject, message } = formData;

        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="contact" ref={ref} className="section-padding bg-black">
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities, creative projects, or just having a chat.
                            Feel free to reach out if you'd like to work together!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold text-white mb-8">
                                Let's Connect
                            </h3>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg transition-colors group border border-gray-800"
                                    >
                                        <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center transition-colors border border-gray-600/50">
                                            <info.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 shadow-lg shadow-black/50">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Quick Response
                                </h4>
                                <p className="text-gray-400">
                                    I typically respond to emails within 24 hours. For urgent matters,
                                    feel free to call or send a message on LinkedIn.
                                </p>
                            </div>
                        </motion.div>

                        {/* 3D Model */}
                        <motion.div variants={itemVariants} className="flex items-center justify-center">
                            <div className="w-full h-96 flex items-center justify-center">
                                <spline-viewer
                                    url="https://prod.spline.design/fExktkI3RdRIjTd9/scene.splinecode"
                                    className="w-full h-full rounded-xl"
                                ></spline-viewer>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-gray-900 text-white transition-all duration-200 shadow-sm shadow-lg"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-gray-900 text-white transition-all duration-200 shadow-sm shadow-lg"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-gray-900 text-white transition-all duration-200 shadow-sm shadow-lg"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-gray-900 text-white transition-all duration-200 shadow-sm shadow-lg resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                {/* Submit Status */}
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center space-x-2 p-4 rounded-lg ${submitStatus === 'success'
                                            ? 'bg-green-900/20 text-green-400'
                                            : 'bg-red-900/20 text-red-400'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <CheckCircle size={20} />
                                        ) : (
                                            <AlertCircle size={20} />
                                        )}
                                        <span>
                                            {submitStatus === 'success'
                                                ? 'Message sent successfully! I\'ll get back to you soon.'
                                                : 'Please fill in all fields with valid information.'}
                                        </span>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 border border-gray-600/50 shadow-lg shadow-black/50'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;