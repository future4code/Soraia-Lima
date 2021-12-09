import { useResquestData } from "../hooks/useResquestData";

function TripDetailsPage() {

    const trips = useResquestData()

    const mapTrispDice = trips.map((trip) => {
        return (
            <div key={trip.id}  >
                <h1 >{trip.name}</h1>
                <div>
                    <p><b>Descrição:</b> {trip.description}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays}</p>
                    <p><b>Data:</b> {trip.date}</p>
                </div>
                <button>Voltar</button>
                
            </div>
        )
    })

    // const mapTripsPending = trips.map((trip)=>{
    //     <div>
    //         <h2>Candidatos Pendentes</h2>
    //             <p><b>Nome:</b> {trip.name}</p>
    //             <p><b>Profissão:</b> {trip.profession}</p>
    //             <p><b>Idade:</b> {trip.age}</p>
    //             <p><b>Texto da candidatura:</b> {trip.applicationText}</p>
    //     </div>
    // })

    // const mapTripsApproved = trips.map((trip)=>{
    //     <div>
    //         <h2>Candidatos Aprovados</h2>
    //             <li>
    //                 <ul>{trip.name}</ul>
    //             </li>

    //     </div>
    // })
    return (
        <div>
            {mapTrispDice}

            

            {/* {mapTripsPending}

            {mapTripsApproved} */}
        </div>
    )
}

export default TripDetailsPage;