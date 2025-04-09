

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 bg-black-100 text-white flex flex-col items-center font-primary bg-gradient-to-tr from-primary/30 via-black-100 to-primary/30">
        
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32 md:py-48 w-full max-w-7xl px-5 flex flex-col justify-center items-center gap-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-secondary">
            A Smarter Way to Organize Your Thoughts.
          </h1>

          <p className="max-w-md md:max-w-lg text-sm md:text-base">
            Everything you learn, think, or create—saved in one place.
            Accessible anytime, from anywhere.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-5 text-sm font-medium"
          >
            <Link
              to={"/signup"}
              className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-md transition-all duration-200"
            >
              Sign Up
            </Link>
          </motion.button>
        </motion.section>

        {/* IMAGE DEMO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-10 w-full max-w-7xl px-5 flex flex-col items-center relative"
        >
          <h1 className="text-lg md:text-xl font-semibold text-center z-10">
            Simple, intuitive, and powerful.
          </h1>

          <div className="absolute top-10 w-full h-full bg-white/20 blur-2xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="z-10 w-full mt-6 bg-gray-500 rounded-xl border-4 border-primary overflow-hidden"
          >
            <img
              src="/pic.png"
              alt="main_page_demo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </motion.section>

        {/* SHARE THOUGHTS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-20 max-w-7xl px-5 w-full flex flex-col-reverse md:flex-row items-center gap-10"
        >
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-left text-md md:text-xl font-semibold max-w-md">
            <p>Your thoughts,</p>
            <p className="text-gray-200">now shareable with just a link.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-5 text-sm font-medium"
            >
              <Link
                to={"/signup"}
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-md transition-all duration-200"
              >
                Sign Up
              </Link>
            </motion.button>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full md:block"
          >
            <img
              src="/share_pic.png"
              alt="sharing_screen_demo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

