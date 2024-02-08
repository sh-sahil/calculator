let calculation = localStorage.getItem('calculation');

        function updateCalculation(value){
            calculation += value;
            displayCalculation();
            localStorage.setItem('calculation',calculation);
        }

        function displayCalculation(){
            display = document.querySelector('.js-display-calculation');
            display.innerHTML = calculation; 
        }