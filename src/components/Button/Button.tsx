import styles from './Button.module.css'

interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    onHandleClick: () => void
}

function Button({ children, color = 'primary' }: Props) {
    return (
        <>
            <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')} >{children}</button>
        </>
    )
}

export default Button;