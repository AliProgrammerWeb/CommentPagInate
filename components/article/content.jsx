

function Content({content}) {
    return ( 
        <div className="py-8">
            <p className="text-sm text-zinc-700">
                {content}
            </p>
            <div className="flex space-x-3 text-xs pt-8 text-gray-600">
                <div className="border border-gray-400 px-3 py-2">
                    <span>#Leadership</span>
                </div>
                <div className="border border-gray-400 px-3 py-2">
                    <span>#Effectiveness</span>
                </div>
                <div className="border border-gray-400 px-3 py-2">
                    <span>#Authentcitity</span>
                </div>
                <div className="border border-gray-400 px-3 py-2">
                    <span>#Team Culture</span>
                </div>
            </div>
        </div>
     );
}

export default Content;