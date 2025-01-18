let direction = document.querySelector('#flexDirectionBtn');
let alignItems = document.querySelector('#alignItemsBtn');
let justifyContent = document.querySelector('#justifyContentBtn');
let alignContent = document.querySelector('#alignContentBtn');
let flexWrap = document.querySelector('#flexWrapBtn');

let contain = document.querySelector('.contain');




direction.addEventListener('click', () => {
    if(!document.querySelector('.btn-container-secundary')){
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'btn-container-secundary';
        nuevoElemento.innerHTML = '<button class=btnPrueba id=row>row</button> <button class=btnPrueba id=column>column</button> <button class=btnPrueba id=row-reverse>row-reverse</button> <button class=btnPrueba id=column-reverse>column-reverse</button>';
        direction.insertAdjacentElement('afterend', nuevoElemento);

        let row = document.getElementById('row');
        let column = document.getElementById('column');
        let rowReverse = document.getElementById('row-reverse');
        let columnReverse = document.getElementById('column-reverse');

        let options = [row, column, rowReverse, columnReverse];

        options.map((option) => {option.addEventListener('click',() => {
            contain.style.flexDirection = option.id; 
        })});

        

        direction.style.backgroundColor = 'blue';
    }else{
        document.querySelector('.btn-container-secundary').remove();

        direction.style.backgroundColor = 'gray';
    }

});

alignItems.addEventListener('click', () => {
    if(!document.querySelector('.btn-container-secundary-2')){
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'btn-container-secundary-2';
        nuevoElemento.innerHTML = '<button class=btnPrueba id=flex-start>flex-start</button> <button class=btnPrueba id=center>center</button> <button class=btnPrueba id=flex-end>flex-end</button> <button class=btnPrueba id=stretch>stretch</button><button class=btnPrueba id=baseline>baseline</button>';
        alignItems.insertAdjacentElement('afterend', nuevoElemento);

        let flexStart = document.getElementById('flex-start');
        let center = document.getElementById('center');
        let flexEnd = document.getElementById('flex-end');
        let stretch = document.getElementById('stretch');
        let baseline = document.getElementById('baseline');

        let options = [flexStart, center, flexEnd, stretch, baseline];

        options.map((option) => {option.addEventListener('click',() => {
            contain.style.alignItems = option.id;
        })});

        alignItems.style.backgroundColor = 'blue';
    }else{
        document.querySelector('.btn-container-secundary-2').remove();
        alignItems.style.backgroundColor = 'gray';
    }
});

justifyContent.addEventListener('click', () => {
    if(!document.querySelector('.btn-container-secundary-3')){
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'btn-container-secundary-3';
        nuevoElemento.innerHTML = '<button class=btnPrueba id=flex-start-2>flex-start</button> <button class=btnPrueba id=center-2>center</button> <button class=btnPrueba id=flex-end-2>flex-end</button> <button class=btnPrueba id=sapce-between>space-between</button> <button class=btnPrueba id=space-around>space-around</button><button class=btnPrueba id=space-evenly>space-evenly</button>';
        justifyContent.insertAdjacentElement('afterend', nuevoElemento);

        let flexStart2 = document.getElementById('flex-start-2');
        let center2 = document.getElementById('center-2');
        let flexEnd2 = document.getElementById('flex-end-2');
        let spaceBetween = document.getElementById('sapce-between');
        let spaceAround = document.getElementById('space-around');
        let spaceEvenly = document.getElementById('space-evenly');

        flexStart2.addEventListener('click',() => {
            contain.style.justifyContent = 'flex-start'
        });

        center2.addEventListener('click',() => {
            contain.style.justifyContent = 'center'
        });

        flexEnd2.addEventListener('click',() => {
            contain.style.justifyContent = 'flex-end'
        });

        spaceBetween.addEventListener('click',() => {
            contain.style.justifyContent = 'space-between'
        });

        spaceAround.addEventListener('click',() => {
            contain.style.justifyContent = 'space-around'
        });

        spaceEvenly.addEventListener('click',() => {
            contain.style.justifyContent = 'space-evenly'
        });

        justifyContent.style.backgroundColor = 'blue';
    }else{
        document.querySelector('.btn-container-secundary-3').remove();
        justifyContent.style.backgroundColor = 'gray';
    }});

alignContent.addEventListener('click', () => {
    if(!document.querySelector('.btn-container-secundary-4')){
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'btn-container-secundary-4';
        nuevoElemento.innerHTML = '<button class=btnPrueba id=flex-start-3>flex-start</button> <button class=btnPrueba id=center-3>center</button> <button class=btnPrueba id=flex-end-3>flex-end</button> <button class=btnPrueba id=space-between-2>space-between</button> <button class=btnPrueba id=space-around-2>space-around</button><button class=btnPrueba id=space-evenly-2>space-evenly</button><button class=btnPrueba id=stretch-2>stretch</button>';
        alignContent.insertAdjacentElement('afterend', nuevoElemento);

        let flexStart3 = document.getElementById('flex-start-3');
        let center3 = document.getElementById('center-3');
        let flexEnd3 = document.getElementById('flex-end-3');
        let spaceBetween2 = document.getElementById('space-between-2');
        let spaceAround2 = document.getElementById('space-around-2');
        let spaceEvenly2 = document.getElementById('space-evenly-2');
        let stretch2 = document.getElementById('stretch-2');

        flexStart3.addEventListener('click',() => {
            contain.style.alignContent = 'flex-start'
        });

        center3.addEventListener('click',() => {
            contain.style.alignContent = 'center'
        });

        flexEnd3.addEventListener('click',() => {
            contain.style.alignContent = 'flex-end'
        }); 

        spaceBetween2.addEventListener('click',() => {
            contain.style.alignContent = 'space-between'
        });

        spaceAround2.addEventListener('click',() => {
            contain.style.alignContent = 'space-around'
        }); 

        spaceEvenly2.addEventListener('click',() => {
            contain.style.alignContent = 'space-evenly'
        }); 

        stretch2.addEventListener('click',() => {
            contain.style.alignContent = 'stretch'
        }); 

        alignContent.style.backgroundColor = 'blue';
    }else{
        document.querySelector('.btn-container-secundary-4').remove();
        alignContent.style.backgroundColor = 'gray';
    }});  

flexWrap.addEventListener('click', () => {
    if(!document.querySelector('.btn-container-secundary-5')){
        let nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'btn-container-secundary-5';
        nuevoElemento.innerHTML = '<button class=btnPrueba id=nowrap>nowrap</button> <button class=btnPrueba id=wrap>wrap</button> <button class=btnPrueba id=wrap-reverse>wrap-reverse</button>';
        flexWrap.insertAdjacentElement('afterend', nuevoElemento);

        let nowrap = document.getElementById('nowrap');
        let wrap = document.getElementById('wrap');
        let wrapReverse = document.getElementById('wrap-reverse');

        let options = [nowrap, wrap, wrapReverse];

        options.map((option) => {option.addEventListener('click',() => {
            contain.style.flexWrap = option.id;
        })});

        flexWrap.style.backgroundColor = 'blue';

    }else{
        document.querySelector('.btn-container-secundary-5').remove();
        flexWrap.style.backgroundColor = 'gray';
    }
});



