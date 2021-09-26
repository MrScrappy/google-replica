import React from 'react'

const FooterCustom = () => {
    

    return (
        <footer className="grid w-full bg-gray-100 divide-y-[1px] divide-gray-300 text-gray-500 ">
            <div className="px-8 py-3">
                <p>México</p>
            </div>

            {/*  */}
              
            <div className="flex flex-wrap justify-between px-4">
                <div className="flex justify-around">
<p className="footersOptions">Sobre Google</p>
<p className="footersOptions">Publicidad</p>
<p className="footersOptions">Negocios</p>
<p className="footersOptions">Cómo funciona la Búsqueda</p>
                </div>
               
                <div className="flex justify-around">
<p className="footersOptions">Privacidad</p>
<p className="footersOptions">Condiciones</p>
<p className="footersOptions">Preferencias</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterCustom
