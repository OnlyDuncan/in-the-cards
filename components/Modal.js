
import Modal from 'react-modal';
import { useState } from 'react';

export default function ReadMoreModal ({onClick, ...props}) {
    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflowY: 'scroll'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404355',
            width: '40rem',
            maxWidth: '90%',
            maxHeight: '95vh',
            position: 'relative'
        }
    }

    return (
        <div className="flex justify-center">
            <button className="button" onClick={() => setIsOpen(true)}>Read More</button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles} className="card-back">
            </Modal>
        </div>

    )
}