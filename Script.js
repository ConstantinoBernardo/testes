const {Home} from "./comtrollers/main"

module.exports = (Rout) =>{
    Rout.get('/', Home)
}
