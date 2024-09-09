export const BorderedImage = () => {
    return <div>
        <div className="rounded-2xl flex bg-gradient-to-r from-green900 to-green-100 bg-green-500 h-96 sm:h-120 items-end justify-center sm:justify-end">
            
            <div className="flex sm:h-120 rounded-xl sm:items-end sm:rounded-none sm:rounded-br-xl">
                <img
                className="h-80 sm:w-96 sm:h-96 rounded-t-xl sm:rounded-t-none sm:rounded-br-2xl sm:rounded-tl-2xl bg-green-500"
                src="src/assets/nurse6.png"/>
            </div>
        </div>
     </div>
}