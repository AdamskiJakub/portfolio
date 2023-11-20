import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Joi from "joi";
import { useRouter } from "next/router";

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      "string.pattern.base": "Name must contain only letters",
      "string.pattern.invert.base": "Name must contain only letters",
      "string.empty": "Name is required",
      "string.min": "Name must have at least 3 characters and only letter",
    }),

  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Email must contain @ and . and have at least 3 characters",
    "string.empty": "Email is required",
  }),

  subject: Joi.string().min(3).required().messages({
    "string.min": "Subject must have at least 3 characters",
    "string.empty": "Subject is required",
  }),

  message: Joi.string().min(3).max(500).required().messages({
    "string.min": "Message must have at least 3 characters",
    "string.max": "Message cannot exceed 500 characters",
    "string.empty": "Message is required",
  }),
});

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  const errorAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });

    if (!error) {
      setErrors({});
      router.push("/thankyou");
      return true;
    }

    const newErrors = {};
    error.details.forEach((detail) => {
      newErrors[detail.path[0]] = detail.message;
    });

    setErrors(newErrors);
    return false;
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Talk.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex-1 flex flex-col gap-10 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Name"
                  className={`input ${errors.name ? "border-red-500" : ""}`}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                {errors.name && (
                  <motion.p
                    variants={errorAnimation}
                    initial="hidden"
                    animate="visible"
                    className="text-red-500 text-xs absolute mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Email"
                  className={`input ${errors.email ? "border-red-500" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                {errors.email && (
                  <motion.p
                    variants={errorAnimation}
                    initial="hidden"
                    animate="visible"
                    className="text-red-500 text-xs absolute mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Subject"
                className={`input ${errors.subject ? "border-red-500" : ""}`}
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                autoComplete="off"
              />
              {errors.subject && (
                <motion.p
                  variants={errorAnimation}
                  initial="hidden"
                  animate="visible"
                  className="text-red-500 text-xs absolute mt-1"
                >
                  {errors.subject}
                </motion.p>
              )}
            </div>
            <div className="relative flex-1">
              <textarea
                placeholder="Message"
                className={`textarea ${errors.message ? "border-red-500" : ""}`}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                autoComplete="off"
              ></textarea>
              {errors.message && (
                <motion.p
                  variants={errorAnimation}
                  initial="hidden"
                  animate="visible"
                  className="text-red-500 text-xs absolute mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[24px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
