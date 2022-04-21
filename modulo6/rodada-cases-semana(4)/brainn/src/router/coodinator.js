export const goToPage = (id, navigate) => {
// console.log(id)
    if (id == 0) {
        return (
            navigate('/')
        )
    } else if (id == 1) {
        return (
            navigate('/quina')
        )
    } else if (id == 2) {
        return (
            navigate('/lotofacil')
        )
    } else if (id == 3) {
        return (
            navigate('/lotomania')
        )
    } else if (id == 4) {
        return (
            navigate('/timemania')
        )
    } else if (id == 5) {
        return (
            navigate('/dia-de-sorte')
        )
    }
}

// export const goToMegaSeine = (navigate) => {
//     navigate('/')
// }

// export const goToConer = (navigate) => {
//     navigate('/quina')
// }

// export const goToLotoeasy = (navigate) => {
//     navigate('/lotofacil')
// }

// export const goToLotomania = (navigate) => {
//     navigate('/lotomania')
// }

// export const goToLockDay = (navigate) => {
//     navigate('/dia-de-sorte')
// }

// export const goToTimemania = (navigate) => {
//     navigate('/timemania')
// }