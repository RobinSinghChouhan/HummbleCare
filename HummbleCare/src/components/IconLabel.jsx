function IconLabel({Icon, label}) {
    return <div className="flex text-lg items-center">
        <Icon className="text-green-700"/>
        <p className="ml-4">{label}</p>
    </div>
}

export default IconLabel;