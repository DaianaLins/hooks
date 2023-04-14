import React, { useState } from 'react';
import { useGlobal } from '../../hooks/GlobalContext';
import styles from './style.css';
// import { Container } from './styles';

const ModalEdit = ({ setModal }) => {
    const { setZoacao } = useGlobal();
    const [text, setText] = useState('');
    console.log(text)

    const handleClick = () => {
        if (!text) return setModal(true);
        setZoacao(text);
        setModal(false);
    }


    return (
        <div className={styles.container}>
            <h1>MODAL</h1>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button type='button' onClick={() => handleClick()}> Salvar</button>
            <button type='button' onClick={() => setModal(false)}> fechar</button>
        </div>
    );
}

export default ModalEdit;