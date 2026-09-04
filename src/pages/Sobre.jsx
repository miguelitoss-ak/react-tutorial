
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Sobre = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1>Sobre Nós</h1>
            <p>Esta é a página sobre nós.</p>
        </div>
    )
}
export default Sobre;