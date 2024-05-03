/* Accepts an object structured like this
const locations = {
    headerText: "Our Locations",
    data: [
        { icon: FaLocationDot, value: "Bethpage, NY | Yale University area | Cornell University area" },
        { icon: FaLocationDot, value: "Woodside, NY | Harvard University area | Columbia University area" },
        { icon: FaLocationDot, value: "Woodhaven, NY | Brown University area | Princeton University area" },
        { icon: FaLocationDot, value: "Fort Hood, TX | Dartmouth College area | University of Pennsylvania area" },
    ],
};
*/
const ListBox = ({ listObject }) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <span className="text-lg font-bold">{listObject.headerText}</span>
            </div>
            <div className="flex flex-col gap-2">
                {listObject.data.map((listItem) => {
                    const Icon = listItem.icon;
                    return (
                        <div key={listItem.value} className="flex items-center gap-2">
                            <Icon className="text-primary" />
                            <span className="text-xs">{listItem.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListBox;
