function RoundedIconBtn({Icon, label, href, onClick, type = "button", disabled = false}) {
  const className = "group border border-green-700 flex shadow-2xl justify-center rounded-4xl px-3 sm:px-7 transition-all py-1 sm:py-3 bg-green-600 hover:cursor-pointer hover:bg-green-700 w-full items-center disabled:opacity-60 disabled:cursor-not-allowed";

  if (href) {
    return (
      <a href={href} className={className}>
        <p className="text-md sm:text-xl font-medium text-white">{label}</p>
        <Icon className="text-white w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-5 mr-1 sm:mr-5 font-semibold transform transition-transform group-hover:translate-x-2" />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      <p className="text-md sm:text-xl font-medium text-white">{label}</p>
      <Icon className="text-white w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-5 mr-1 sm:mr-5 font-semibold transform transition-transform group-hover:translate-x-2" />
    </button>
  );
}

export default RoundedIconBtn;
