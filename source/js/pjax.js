var ic_script = document.createElement('script');
ic_script.src = stellar.plugins.instant_click.js;
ic_script['data-no-instant'] = true;
ic_script.onload = ic_script.onreadystatechange = function () {
    const readyState = ic_script.readyState;
    console.log(readyState);
    if (!readyState || /loaded|complete/.test(readyState)) {
        ic_script.onload = ic_script.onreadystatechange = null;
        var ic_init_script = document.createElement('script');
        ic_init_script['data-no-instant'] = true;
        ic_init_script.innerHTML = 'InstantClick.init();';
        document.body.appendChild(ic_init_script);
    };
};
document.body.appendChild(ic_script);
console.log('InstantClick loaded');