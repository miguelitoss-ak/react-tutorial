import john from './assets/john.jpg'

function Paragrafo() {
    return (
        <p>
            Este é um parágrafo de exemplo.
            <img src={john} style={{ width: '150px', height: 'auto' }} />
        </p>
    )
}
export default Paragrafo