enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 100,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

// to save our javascript from generating too much code from this, we can easily add the const keyuword before defining enum

const enum SSeatChoice {
    AISLE = 'aisle',
    MIDDLE = 100,
    WINDOW,
    FOURTH
}

const hcSSeat = SSeatChoice.AISLE