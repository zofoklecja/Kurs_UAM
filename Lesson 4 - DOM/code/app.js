window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...
    //oninput = function
    
   /* var weightInput = document.querySelector('.weight input'),
        weightSpan = document.querySelector('.weight span'),
        heightInput = document.querySelector('.height input'),
        heightSpan = document.querySelector('.height span'),
        bmiSpan = document.querySelector('h1 span');
    
    function updateBMI() {
        var weight = +weightSpan.textContent,
            height = (+heightSpan.textContent) / 100;
        bmiSpan.textContent = weight / (height * height);
        //var result = ^^^
        // if (result == 17) {
    }
    
    function updateWeight(event) {
        weightSpan.textContent = weighInput.value;
        updateBMI();
    }
    
    function updateHeight(event) {
        heightSpan.textContent = event.target.value;
        updateBMI();
    }
    
    weightInput.addEventListener('input', updateWeight);*/
    
    var weightSlider = document.querySelector('.weight input');
    weightSlider.addEventListener('input', function() {
        document.querySelector('.weight span').innerHTML= weightSlider.value;
    })

    var heightSlider = document.querySelector('.height input');
    heightSlider.addEventListener('input', function() {
        document.querySelector('.height span').innerHTML= heightSlider.value;
    })
    
    
});

