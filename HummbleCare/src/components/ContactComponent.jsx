function ContactComponent({Icon, title, text, subtext}){
    return <div className="mb-10">
        <div className="flex">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-green-100 p-2 sm:p-4 rounded-lg sm:rounded-2xl border-1 border-green-200">
                <Icon className="text-green-600 w-full h-full"/>
            </div>
            <div className="ml-5 text-md sm:text-xl">
                <p className="font-medium">{title}</p>
                <p className="text-gray-700">{text}</p>
                <p className="font-semibold text-green-700">{subtext}</p>
            </div>
        </div>
    </div>
}

export default ContactComponent