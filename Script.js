const {Home} = "./controllers/main"

module.exports = (Route) =>{
    Route.get('/', Home)
}
