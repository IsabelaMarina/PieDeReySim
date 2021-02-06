function rellenarThis(){
    $('#TituloPag').text("Simulaciones");

    var asideDerTemp = `
    <aside id="Der">
        <div class="TituloAside" id="TituloDer">
            Simulaciones
            <div class="DerAbrirCont">
                <span id="AsideDerCerrar" class="hamburger hamburgerAside" onclick="closeAside('#Der','right')"><i class="fas fa-angle-double-right fa-1x"></i></span>
            </div>
        </div>

        <hr>
        
        <nav>
            <ul class="MenuNav">
                <li><a href='#'>Opciones no implementadas</a></li>
                <!-- <li class="OpcionConSubmenu"><a href='return false;'>entradas del mes</a>
                    <ul class="SubmenuNav">
                        <li><a href='#'>Tema 1</a></li>
                        <li><a href='#'>Tema 2</a></li>
                        <li><a href='#'>Tema 3</a></li>
                    </ul>
                </li>
                <li><a href='#'>Historial</a></li> -->
            </ul>
        </nav>
    </aside>
    `;
    $('#asideDerSim').before(asideDerTemp);
    $('#asideDerSim').remove();
    $('#LogoAside').attr('src','../imgs/LogoMioVer.png');
    $('#LogoHeader').attr('src','../imgs/LogoMioVer.png');
}