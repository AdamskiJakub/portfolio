import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Joi from "joi";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      "string.pattern.base": "Name must contain only letters",
      "string.empty": "Name is required",
      "string.min": "Name must have at least 3 characters and only letters",
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_pz9d8zq",
          "template_7v41faq",
          formRef.current,
          "-0tM7W_uqP50SJP60"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const errorAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });

    if (!error) {
      setErrors({});
      router.push("/thankyou");
      return true;
    }

    const newErrors: FormErrors = {};
    error.details.forEach((detail) => {
      newErrors[detail.path[0] as string] = detail.message;
    });

    setErrors(newErrors);
    return false;
  };

  return (
    <div className="h-full bg-primary/30 md:mt-10">
      <div className="container mx-auto flex h-full items-center justify-center py-8 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          <motion.h2
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: -8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="h2 mb-6 text-center md:mb-3"
          >
            You can send me an <span className="text-accent">Email.</span>
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              sendEmail(e);
              handleSubmit(e);
            }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mx-auto flex w-full flex-1 flex-col gap-6"
          >
            <div className="flex w-full gap-x-6">
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
                    className="absolute mt-1 text-xs text-red-500"
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
                    className="absolute mt-1 text-xs text-red-500"
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
                  className="absolute mt-1 text-xs text-red-500"
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
              />
              {errors.message && (
                <motion.p
                  variants={errorAnimation}
                  initial="hidden"
                  animate="visible"
                  className="absolute mt-1 text-xs text-red-500"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className="group btn flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent md:mb-8"
            >
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Send
              </span>
              <BsArrowRight className="absolute -translate-y-[120%] text-[24px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
