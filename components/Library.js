"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

export default function (props) {

    const libraryArray = [];

    Object.values(props).forEach((value) => {
        libraryArray.push(value);
    });

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
            maxHeight: '90vh',
            position: 'relative',
            overflowY: 'scroll'
        }
    }

    return (
        <div style={{ width: "20vw" }}>
            <button type="button" className="text-white darcy ml-3 mt-2" onClick={() => setIsOpen(true)}>
                Library
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="flex-col justify-center">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto p-3">
                            <Image
                                src="/Images/Close.svg"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
                        {libraryArray.map(({ Title, Image, Meaning }) => (
                            <div
                                key={Title}
                            >
                                <img
                                     src={`/Images/${Image}.webp`}
                                     width="0"
                                     height="0"
                                     sizes="100vh"
                                     className={`h-full w-auto`}
                                     alt="Tarot Card"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}