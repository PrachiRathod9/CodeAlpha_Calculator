
const answer = document.getElementById('answer');

        function appendValue(value) {
            if (answer.value === "0") {
                answer.value = value;
            } else {
            answer.value += value;
            }
        }

        function clearOne() {
            answer.value = answer.value.slice(0, -1) || "0";
        }

        function allClear() {
            answer.value = "0"; 
        }

        function calculate() {
            try {
                answer.value = eval(answer.value); 
            } catch {
                answer.value = "Error"; 
            }
        }
    