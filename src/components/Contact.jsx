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

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;