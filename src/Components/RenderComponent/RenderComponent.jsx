import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
import Component3 from "../Component3/Component3";
import Component4 from "../Component4/Component4";
import Component5 from "../Component5/Component5";
import Component6 from "../Component6/Component6";
import Component7 from "../Component7/Component7";
import Component8 from "../Component8/Component8";

let RenderComponent = ({index}) =>{
    switch (index) {
        case 0: return <Component1 />
            break;
        case 1: return <Component2 />
            break;
        case 2: return <Component3 />
            break;
        case 3: return <Component4 />
            break;
        case 4: return <Component5 />
            break;
        case 5: return <Component6 />
            break;
        case 6: return <Component7 />
            break;
        case 7: return <Component8 />
            break;
    
        default:
            break;
    }
}

export default RenderComponent