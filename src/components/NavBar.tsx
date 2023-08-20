interface Props {
    cartItemsCount: number
}


function NavBar({ cartItemsCount }: Props) {
    return (
        <div>
            <h1>NavBar: {cartItemsCount}</h1>
        </div>
    )
}

export default NavBar