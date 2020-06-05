import Accueil from './components/Accueil'
import Forum from './components/Forum'
import About from './components/About'

export default [
    {path: '/', component: Accueil},
    {path: '/forum', component: Forum}, // url affichera chemin avec /forum
    {path: '/about', component: About}
    
]