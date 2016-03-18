
function show(node, left) {
  left = nodes[ii];
}
(function() {
  var key = [
    'dilma',
    'lula',
    'sergio moro',
    'juiz moro',
    'aécio neves',
    'aecio neves',
    'fernando henrique cardoso',
    'alckmin',
    'beto richa',
    'eduardo paes',
    'psdb',
    'pmdb',
    'fhc',
    'grampo',
    ' pt ',
    'republica de curitiba',
    'republicadecuritiba',
    'renúncia',
    'ditadura',
    'atibaia',
    'collor',
    'lulinha',
    'grampeado',
    'república de curitiba',
    'eduardo cunha',
    'lava jato',
    'petista',
    'corrupção',
    'lava-jato',
    'zelotes',
    'mensalão',
    'petrolao',
    'petrolão',
    'stf',
    'ministro',
    'casa civil',
    'presidente',
    'presidenta', // HUEHUHEUHUEHEUHE
    'beto richa',
    'crise política',
    'crise politica',
    'ministra',
    'governador',
    'governadora',
    'deputado',
    'deputada',
    'governo',
    'tiririca', // HEUHUEHUHEUHEHUHEUUEHUEHUEHUEH
    'coxinha',
    'vem pra rua',
    'vamos pra rua',
    'vamos para a rua',
    'não vai ter golpe',
    'nãovaitergolpe',
    'naovaitergolpe',
    'Casa Civil',
    'feliciano',
    ' psd ',
    ' prb ',
    'foro privilegiado',
    ' dem ',
    'JUSTIÇA FEDERAL',
    'Poder Judiciário',
    'petralha',
    'impeachment',
    'bolsonaro'
  ];

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                var nodes = document.querySelectorAll('.userContentWrapper, .userContent, ._5pcr, ._5pbx, ._1bar, ._5my2, ._4qjp, ._2kg4, ._5pco, ._52c6, ._5pbx, ._3x-2, .mtm');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text !== undefined) {
                      for (var i=0; i< key.length; i++) {
                        if (text.toLowerCase().indexOf(key[i]) > 0 && nodes[ii].style.display != 'none') {
                          nodes[ii].style.display = 'none';
                          break;
                          // chrome.runtime.sendMessage({action: "politicaRemovida"});
                        }
                      }
                    }
                }

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
