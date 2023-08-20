import { useState } from "react";
import  './ListGroup.css'
import styled from "styled-components";

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? 'blue' : 'none'}
`
interface Props {
    items: string[];
    heading: string;
    onSelected: (item: string) => void;
}

function ListGroup({ items, heading, onSelected }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <h3>No items to display</h3>}
            <List>
                {items.map((item, index) =>
                    <ListItem
                        // className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        active={index === selectedIndex}
                        key={item}
                    onClick={
                        () => {
                            setSelectedIndex(index)
                            onSelected(item);
                        }

                    }
                    >
                        {item}
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default ListGroup;