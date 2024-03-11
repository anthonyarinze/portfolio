import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { inputStyles } from "../constants/inputStyles";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="items-start justify-start">
      {/* HEADING */}
      <motion.div
        className="flex items-start justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.25 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-2 mt-20 text-2xl font-semibold text-white md:mb-5 md:mt-28">
          Connect
        </p>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          className="basis-1/2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/47cae03775a61e457696b762c412c620"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red-400">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red-400">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid Email."}
              </p>
            )}
            <textarea
              className={inputStyles}
              placeholder="Message"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-red-400">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max Length is 2000 chars."}
              </p>
            )}

            <button
              type="submit"
              className="mt-4 rounded-md border-[1.2px] border-card-text bg-card-color p-4 font-semibold text-white"
            >
              Send Me A Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
