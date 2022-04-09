export const goToHome = (navigate) => {
    navigate('/')
}

export const goToDetail = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}

export const goToBack = (navigate) => {
    window.scrollTo(0, 0)
    navigate(-1)
}