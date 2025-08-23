function IconLabel({Icon, label}) {
    return <div className="flex text-xs sm:text-lg items-center">
        <Icon className="text-green-700"/>
        <p className="ml-1 sm:ml-4">{label}</p>
    </div>
}

export default IconLabel;