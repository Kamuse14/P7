import Accueil from './components/Accueil'
import Forum from './components/Forum'
import About from './components/About'
import Delacount from './components/Delacount'

export default [
    {path: '/', component: Accueil},
    {path: '/forum', component: Forum}, // url affichera chemin avec /forum
    {path: '/about', component: About},
    {path: '/delacount', component: Delacount}
    
]