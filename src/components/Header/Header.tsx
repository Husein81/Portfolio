import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: 'url("/OIP.jpg")' }}
    >
      <div id="Home" className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 py-10">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: "15rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-opacity-50 p-5 rounded-lg"
            >
              <div className="text-white">
                <h3 className="text-3xl">Hello There,</h3>
                <h2 className="text-4xl">
                  I'm Hussein{" "}
                  <span className="text-mountainMeadow">Nasrallah</span>
                </h2>
                <h5 className="text-xl">I'm a Software Developer</h5>
                <br />
                <button className="bg-mountainMeadow/65 hover:bg-mountainMeadow text-white py-2 px-4 rounded">
                  <Link to="About" smooth={true} duration={500}>
                    About Me
                  </Link>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
