import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import logo from "@/assets/logo.png"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} max-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side */}
                        <img alt="logo" src={logo} />
                        {/* right side */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <p>Home</p>
                                <p>Benefits</p>
                                <p>Our Classes</p>
                                <p>Contact Us</p>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <button>Become a Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;