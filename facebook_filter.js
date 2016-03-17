
(function() {
  var key = [
    'dilma',
    'lula',
    'sergio moro',
    'juiz moro',
    'psdb',
    'pmdb',
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
    'presidente',
    'presidenta', // HUEHUHEUHUEHEUHE
    'beto richa',
    'ministra',
    'governador',
    'governadora',
    'deputado',
    'deputada',
    'governo',
    'tiririca', // HEUHUEHUHEUHEHUHEUUEHUEHUEHUEH
    'coxinha',
    'Casa Civil',
    'JUSTIÇA FEDERAL',
    'Poder Judiciário',
    'petralha',
    'impeachment',
    'bolsonaro'];

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
                          nodes[ii].text ="huehue";
                          chrome.runtime.sendMessage({action: "politicaRemovida"});
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
