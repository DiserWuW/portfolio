document.addEventListener('DOMContentLoaded', () => {
    const skill1 = document.getElementsByClassName('skills')[0];
    const skill2 = document.getElementsByClassName('skills')[1];
    skill1.addEventListener("animationstart", listener, false);
    skill1.addEventListener("animationend", listener, false);
    skill1.addEventListener("animationiteration", listener, false);

    skill2.addEventListener("animationstart", listener, false);
    skill2.addEventListener("animationend", listener, false);
    skill2.addEventListener("animationiteration", listener, false);

    function listener(e) {
        switch(e.type) {
            case "animationstart":
              console.log('iniciado');
              break;
            case "animationend":
              console.log('finalizado');
              break;
            case "animationiteration":
              console.log('Nueva iteración');
              break;
          }
    }
});