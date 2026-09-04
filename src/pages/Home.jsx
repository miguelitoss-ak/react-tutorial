
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h1>Bem-vindo à página inicial!</h1>
            <p>Este é um exemplo de como usar o contexto de tema no React.</p>
        </div>
    );


}
  export default Home;