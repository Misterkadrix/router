import React from 'react'
import { Form, useNavigate } from 'react-router-dom'

import { useRef } from 'react';



export const Connection = (props) => {
    let mail = useRef();
    let mdp = useRef();


    // =======
    // ce bout de code va permettre la navigation apres avoir submit nos input a travers le Form.
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect
        navigate('/myaccount', { replace: true });
    };

    // ======

    // cette fonction permet de modifier la value de nos variables grace au variable d etat qu on a appele via le props.
    const FormCompleted = () => {
        props.mail(mail.current.value);
        props.mdp(mdp.current.value);
    }

    return (
        <>
            {/* onSubmit att que je clique sur un bouton de type submit pour faire appel a la fonction qui va le rediriger. */}
            <Form method='post' action='/' onSubmit={handleSubmit}>
                <input ref={mail} type="" />
                <input ref={mdp} type="" />
                <button onClick={() => { FormCompleted() }} type='submit' >yes</button>
            </Form>
        </>
    )
}
