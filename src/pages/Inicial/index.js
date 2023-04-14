import React, { useEffect, useState } from 'react';
import ModalEdit from '../../components/modalEdit';
import style from './style.css'
import { useGlobal } from '../../hooks/GlobalContext';

const Index = () => {
    const [modal, setModal] = useState(false);
    const {zoacao} = useGlobal();

    return (
        <div className={style.container}>
            <section>
            {modal && <ModalEdit setModal={setModal} />}
                <h1>{zoacao}</h1>
                <button type='submit'> sim</button>
                <button type='submit'> não</button>
                <div>
                    <button type='button' onClick={() => setModal(true)}> editar zoação</button>
                </div>
            </section>
        </div>
    )
}

export default Index;