import { useEffect, useRef, useState } from "react";
import Clouds from 'vanta/dist/vanta.clouds.min';
import *  as THREE from 'three'


const useVanta = () => {
    const divRef = useRef(null);
    const [vanta, setvanta] = useState(0);
  
    useEffect(() => {
            if(!vanta) {  // sero es falsy por lo tanto se puede negar
                console.log('Moficamos el estado vanta');
  
                setvanta(Clouds({
                    THREE,
                    el: divRef.current
                }))
            }
  
            return () =>{
                if(vanta) {
                    vanta.destroy();
                    console.log('libero los recursos');
                }
            }
  
        }, [vanta]);
        return [divRef]
    }


  export default useVanta; 
