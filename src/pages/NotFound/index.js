import React from 'react';

const Pagina404 = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1>Ops, quebrou tudo :O</h1>
        <p>
        <a href="/">Você pode jogar ou voltar pra home :)</a>
        </p>
        <p>
        Ou <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">aprender a fazer o jogo</a>
        </p>

        <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600" />
    </div>
)

export default Pagina404;