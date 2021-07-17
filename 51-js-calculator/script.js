const $lis = document.querySelectorAll("ul li")
$lis.forEach((node) => {
    node.addEventListener('mousedown', function(event){
        event.preventDefault()
        const value = node.innerText.trim()
        const $result = document.querySelector(".result")
        const resultText = $result.innerText.trim()

        if(resultText == '0') {
            $result.innerText = ''
        }

        if(value == '=') {
            let solution = eval(resultText)
            $result.innerText = solution
            return
        }


        if(value.toLowercase == 'c') {
            $result.innerText = "I AM CLEARED"
            return true        
        }

        

        $result.append(value)
    }
})