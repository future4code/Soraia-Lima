import { Container, CardsImg } from '../styles'
import logo from "../imagem/Logo.png"
import Footers from '../components/Footers';


function HomePage() {
    return (
        <Container>
            <div>
                <img src={logo} />
                <CardsImg>
                    <div>
                        <img src="https://s2.glbimg.com/o3IEB8vbwV1MIsws4k4t3I2Ny-s=/e.glbimg.com/og/ed/f/original/2020/05/26/falcon_heavy_demo_mission_40126461851.jpg" alt="partida do foguete" />
                        <p>Venha realizar seu sonho, com a LabeX!</p>
                    </div>

                    <div>
                        <img src="https://www.prensalibre.com/wp-content/uploads/2021/08/MPXZPKOHCRHK5AA5D6BCSGYQGE.jpg?quality=52" />
                        <p>A melhor viagem da sua vida está aqui!</p>
                    </div>

                    <div>
                        <img src="https://img.quizur.com/f/img60a7a8738e6497.32907917.jpg?lastEdited=1621600374" alt="partida do foguete" />
                        <p>Ao Infinito..... E além! </p>
                    </div>
                </CardsImg>
                <Footers />
            </div>
        </Container>
    )
}
export default HomePage;