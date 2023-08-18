import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelected: (item: string) => void;
}

function ListGroup({ items, heading, onSelected }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <h3>No items to display</h3>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={
                            () => {
                                setSelectedIndex(index)
                                onSelected(item);
                            }

                        }
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListGroup;