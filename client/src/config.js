let variable = {}


if (process.env.NODE_ENV  === 'production') {
    variable = {
        DB_ROUTE: "https://pcrtest-centers.herokuapp.com/",
        FRONT_ROUTE: "http://alshameslabs.com/"
    }
} else {
    variable = {
        DB_ROUTE: "http://localhost:8000",
        FRONT_ROUTE: "http://localhost:3000"
    }
}

export default variable