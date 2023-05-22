import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const duration = 0.4;

interface ItemProps {
    name: string;
    path: string;
    currPath: string;
    classes?: string;
}

const AnimatedNavItem = (props: ItemProps) => {
    const { name, path, currPath, classes } = props;

    console.log("THIS IS PATH:", path);

    return (
        <motion.div
            className={
                "h-8 py-0 px-4 rounded-3xl flex items-center justify-center relative" +
                classes
            }
            animate={{
                color: currPath === path ? "#000" : "#686868",
            }}
            transition={{ duration }}
        >
            <Link href={path} className="relative z-10">
                {name}
            </Link>
            {currPath === path && (
                <motion.div
                    className="bg-white w-full h-full absolute rounded-3xl top-0 left-0"
                    layoutId="selected"
                    animate={{ backgroundColor: "#fff" }}
                    transition={{ duration }}
                ></motion.div>
            )}
        </motion.div>
    );
};

export default function NavSlider() {
    const pathname = usePathname();

    return (
        <nav className="bg-grayBg p-[5px] rounded-3xl flex gap-2 text-grayText font-semibold text-sm relative items-start content-start justify-start">
            <motion.div
                className="h-8 py-0 px-4 rounded-3xl flex items-center justify-center relative"
                animate={{
                    color: pathname === "/" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link href="/" className="relative z-10">
                    Home
                </Link>
                {pathname === "/" && (
                    <motion.div
                        className="bg-white w-full h-full absolute rounded-3xl top-0 left-0"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            <motion.div
                className="h-8 py-0 px-4 rounded-3xl flex items-center justify-center relative"
                animate={{
                    color: pathname === "/create" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link href="/create" className="relative z-10">
                    Create
                </Link>
                {pathname === "/create" && (
                    <motion.div
                        className="bg-white w-full h-full absolute rounded-3xl top-0 left-0"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            <motion.div
                className="h-8 py-0 px-4 rounded-3xl flex items-center justify-center relative"
                animate={{
                    color: pathname === "/card" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link href="/card" className="relative z-10">
                    Card
                </Link>
                {pathname === "/card" && (
                    <motion.div
                        className="bg-white w-full h-full absolute rounded-3xl top-0 left-0"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            <motion.div
                className="h-8 py-0 px-4 rounded-3xl items-center justify-center relative flex sm:hidden"
                animate={{
                    color: pathname === "/login" ? "#000" : "#686868",
                }}
                transition={{ duration }}
            >
                <Link href="/login" className="relative z-10">
                    Login
                </Link>
                {pathname === "/login" && (
                    <motion.div
                        className="bg-white w-full h-full absolute rounded-3xl top-0 left-0"
                        layoutId="selected"
                        animate={{ backgroundColor: "#fff" }}
                        transition={{ duration }}
                    ></motion.div>
                )}
            </motion.div>
            {/* <AnimatedNavItem name="Home" path="/" currPath={pathname} /> */}
            {/* <AnimatedNavItem name="Create" path="/create" currPath={pathname} />
            <AnimatedNavItem name="Card" path="/card" currPath={pathname} />
            <AnimatedNavItem
                name="Login"
                path="/login"
                currPath={pathname}
                classes=" flex sm:hidden"
            /> */}
        </nav>
    );
}
