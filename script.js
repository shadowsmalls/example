const contentdireita = document.querySelector('.content-dir');
const contentesquerda = document.querySelector('.content-esq');
const loginlink = document.querySelector('.login-link');
const loginlink2 = document.querySelector('.login-link2');
const cadlink = document.querySelector('.cadastro-link');
const bnext = document.querySelector('.btn-next');
const back = document.querySelector('.retroceder');


cadlink.addEventListener('click',()=> { 
    contentdireita.classList.add('cad-operando');
    contentesquerda.classList.add('cad-operando');
});

loginlink.addEventListener('click',()=> { 
    contentdireita.classList.remove('cad-operando');   
    contentesquerda.classList.remove('cad-operando');
   });
   loginlink2.addEventListener('click',()=> { 
    contentdireita.classList.remove('cad-operando');   
    contentdireita.classList.remove('cad-operando2');   
    contentesquerda.classList.remove('cad-operando');
    contentesquerda.classList.remove('cad-operando2');
});
bnext.addEventListener('click',()=> { 
    contentdireita.classList.add('cad-operando2');   
    contentesquerda.classList.add('cad-operando2');
   });
   back.addEventListener('click',()=> { 
    contentdireita.classList.remove('cad-operando2');
    contentesquerda.classList.remove('cad-operando2');   
   });
