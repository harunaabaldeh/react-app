import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

interface Props {
    onHandleClick: () => void;
}
function Like({ onHandleClick }: Props) {

    const [status, setStatus] = useState(true)

    const toggle = () => {
        setStatus(!status)
        onHandleClick()
    }

    if (status) {
        return <BsFillHeartFill color='red' size={50} onClick={toggle} />
    }

    return <AiOutlineHeart color='pink' size={50} onClick={toggle} />
}

export default Like;