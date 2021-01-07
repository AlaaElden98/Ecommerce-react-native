
export const formatTimer = totalSeconds => {
    const seconds = totalSeconds % 60
    const minutes = (totalSeconds - seconds) / 60
    return appendZero(minutes) + ':' + appendZero(seconds)
}

const appendZero = (val) => {
    return val < 10 ? '0' + val : val
}