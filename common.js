function copyText(btnEL, targetEL) {
    var range = document.createRange();
    range.selectNode(document.getElementById(targetEL));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    var btn = document.getElementById(btnEL);
    var ot = btn.innerText;
    btn.innerText = "Copied !";
    setTimeout(function(){ var btn1 = document.getElementById(btnEL); btn1.innerText = "Copy";}, 3000, btnEL);
    }