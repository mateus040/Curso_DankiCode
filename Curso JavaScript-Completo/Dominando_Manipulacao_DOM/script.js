var p = document.getElementsByTagName('p');

//alert(p.length); // Retornando a quantidade de elementos 'p'

//alert(p[0].innerHTML); // Retornando o elemento 'p'

p[0].innerHTML = 'Manipulado via JS!'; // Manipulando via JS -> Alterando o valor

// Alterando os valores
/*
for(var i = 0; i < p.length; i++)
{
    p[i].innerHTML = 'Manipulando via JS - ' + i;
}
*/

for(var i = 0; i < 10; i++)
{
    p[0].innerHTML = p[0].innerHTML + i;
}