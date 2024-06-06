import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";


function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you accept</p>
    </Modal>

    return <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet enim et posuere mattis. Cras sapien orci, ultricies a dui non, posuere venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id purus tempus, ultrices leo vel, malesuada ex. Aenean nunc dolor, semper mattis libero id, vestibulum suscipit purus. Nulla at elit sed nulla pellentesque scelerisque. Praesent gravida tempus augue a iaculis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet enim et posuere mattis. Cras sapien orci, ultricies a dui non, posuere venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id purus tempus, ultrices leo vel, malesuada ex. Aenean nunc dolor, semper mattis libero id, vestibulum suscipit purus. Nulla at elit sed nulla pellentesque scelerisque. Praesent gravida tempus augue a iaculis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet enim et posuere mattis. Cras sapien orci, ultricies a dui non, posuere venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id purus tempus, ultrices leo vel, malesuada ex. Aenean nunc dolor, semper mattis libero id, vestibulum suscipit purus. Nulla at elit sed nulla pellentesque scelerisque. Praesent gravida tempus augue a iaculis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet enim et posuere mattis. Cras sapien orci, ultricies a dui non, posuere venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id purus tempus, ultrices leo vel, malesuada ex. Aenean nunc dolor, semper mattis libero id, vestibulum suscipit purus. Nulla at elit sed nulla pellentesque scelerisque. Praesent gravida tempus augue a iaculis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet enim et posuere mattis. Cras sapien orci, ultricies a dui non, posuere venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id purus tempus, ultrices leo vel, malesuada ex. Aenean nunc dolor, semper mattis libero id, vestibulum suscipit purus. Nulla at elit sed nulla pellentesque scelerisque. Praesent gravida tempus augue a iaculis.</p>
        
    </div>
}

export default ModalPage;