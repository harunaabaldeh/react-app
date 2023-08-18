interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    onHandleClick: () => void
}

function Button({ children, color = 'primary', onHandleClick }: Props) {
    return (
        <>
            <button type="button" className={'btn btn-' + color} onClick={onHandleClick}>{children}</button>
        </>
    )
}

export default Button;