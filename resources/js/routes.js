import Logo from './components/Logo'
import LogoSymbol from './components/LogoSymbol'
import Colors from './components/Colors'
import Illustrations from "./components/Illustrations";
import LoaderAndAnimations from "./components/LoaderAndAnimations";
import Mascot from "./components/Mascot";
import Wallpapers from "./components/Wallpapers";

export default {
    mode:'history',
    linkActiveClass:'font-bold',
    routes:[
        {
            path:'/',
            component:Logo
        },
        {
            path:'/logo-symbol',
            component:LogoSymbol
        },
        {
            path:'/colors',
            component:Colors
        },
        {
            path:'/mascot',
            component:Mascot
        },
        {
            path:'/illustrations',
            component:Illustrations
        },
        {
            path:'/loaders-and-animations',
            component:LoaderAndAnimations
        },
        {
            path:'/wallpapers',
            component:Wallpapers
        },
    ]
}