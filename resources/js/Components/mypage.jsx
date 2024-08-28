import React from 'react';

const mypage = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '1rem' }}>
        <h1>Minha Página</h1>
        <nav>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Sobre</a>
          <a href="#" style={{ color: 'white' }}>Contato</a>
        </nav>
      </header>
      
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo à minha página!</h2>
        <p>
          Esta é uma página de exemplo criada usando React e JSX. Aqui você pode
          adicionar qualquer conteúdo que desejar.
        </p>
      </main>
      
      <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2024 Minha Página. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default mypage;
