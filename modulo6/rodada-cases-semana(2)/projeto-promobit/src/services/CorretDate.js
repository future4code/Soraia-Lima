export function corretDate(date) {
    const formattedDate = date.split("-").reverse()

    const day = formattedDate[0]
    let newMonth = formattedDate[1]
    const year = formattedDate[2]

    if (newMonth === "01") {
        newMonth = newMonth.replace("01", "JAN")
    } else if (newMonth === "02") {
        newMonth = newMonth.replace("02", "FEV")
    } else if (newMonth === "03") {
        newMonth = newMonth.replace("03", "MAR")
    } else if (newMonth === "04") {
        newMonth = newMonth.replace("04", "ABR")
    } else if (newMonth === "05") {
        newMonth = newMonth.replace("05", "MAI")
    } else if (newMonth === "06") {
        newMonth = newMonth.replace("06", "JUN")
    } else if (newMonth === "07") {
        newMonth = newMonth.replace("07", "JUL")
    } else if (newMonth === "08") {
        newMonth = newMonth.replace("08", "AGO")
    } else if (newMonth === "09") {
        newMonth = newMonth.replace("09", "SET")
    } else if (newMonth === "10") {
        newMonth = newMonth.replace("10", "OUT")
    } else if (newMonth === "11") {
        newMonth = newMonth.replace("11", "NOV")
    } else if (newMonth === "12") {
        newMonth = newMonth.replace("12", "DEZ")
    } else {
        newMonth = newMonth
    }

    const newDate = []
    newDate.push(day, newMonth, year)

    return newDate.join(" ")
}


