import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'spidey';


buscarHeroe(heroeId, (err, heroe) => {
    if (err) {
        console.error(err)
    } else {
        console.info(heroe)
    }
});