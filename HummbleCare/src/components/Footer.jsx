import { Heart, Mail, Map, Phone } from "lucide-react";

const services = [
           "Personal Care",
"Home Care",
"Medical Care",
"24/7 Support",
"Companionship"
]

const links = [
    "About Us",
"Our Team",
"Insurance",
"Careers",
"Privacy Policy"
]

const contacts = [
    {
        icon: Phone,
        detail: "(555) 123-CARE"
    },

    {
        icon: Mail,
        detail: "info@hummblecare.com"
    },

    {
        icon: Map,
        detail: "123 Healthcare Blvd Care City, CA 90210"
    }
]

function Footer() {
    return <div className="py-10 sm:py-20 bg-gray-800">
        <div className="px-10">
            <div className="sm:flex sm:justify-between">
                <div className="w-full flex-1">
                <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-12 sm:h-12 bg-green-500 rounded-sm sm:rounded-2xl">
                        <Heart className="text-white w-full h-full p-1 sm:p-2" />
                    </div>
                    <p className="ml-2 text-xl sm:text-4xl font-semibold text-green-500">Hummble Care</p>
                </div>
                <p className="mt-5 text-md sm:text-xl text-gray-400">Providing compassionate, professional healthcare services to seniors and their families with dignity, respect, and excellence.</p>
                </div>
                <div className="mt-10 sm:mt-0 flex-2 w-full flex">
                <div className="w-full sm:pl-20">
                    <p className="text-lg sm:text-2xl text-white font-semibold mb-5 sm:mb-10">Our Services</p>
                    {services.map((service)=>(
                        <p className="text-md sm:text-xl text-gray-400 mb-2 sm:mb-4">{service}</p>
                    ))}
                </div>
                <div className="w-full pl-10 sm:pl-20">
                    <p className="text-lg sm:text-2xl text-white font-semibold mb-5 sm:mb-10">Quick Links</p>
                    {links.map((link)=>(
                        <p className="text-md sm:text-xl text-gray-400 mb-2 sm:mb-4">{link}</p>
                    ))}
                </div>
                </div>
                <div className="mt-10 sm:mt-0 w-full flex-1">
                    <p className="text-lg sm:text-2xl text-white font-semibold mb-5 sm:mb-10">Contact Us</p>
                    {contacts.map((contact)=>(
                        <div className="flex mb-3 sm:mb-5">
                            <div className="flex items-center">
                            <contact.icon className="w-4 h-4 sm:w-7 sm:h-7 text-green-500"/>
                            </div>
                            <p className="ml-2 text-gray-400 text-md sm:text-xl">{contact.detail}</p>
                            </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <div className="h-0.25 w-full bg-gray-700"></div>
                <p className="mt-5 sm:mt-10 text-md sm:text-xl text-gray-400 text-center">© 2024 HummbleCare. All rights reserved. Licensed Healthcare Provider.</p>
            </div>
        </div>
    </div>
}

export default Footer;