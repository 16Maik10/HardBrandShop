const rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [52, 400],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [1000]
        }
    });
}

const priceValue0 = document.getElementById('price-value0');
const priceValue1 = document.getElementById('price-value1');
const priceValues = [priceValue0, priceValue1];

rangeSlider.noUiSlider.on('update', function(values, handle){

    priceValues[handle].textContent = Math.round(values[handle]) + '$';
});
