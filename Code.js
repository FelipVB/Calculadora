function calculate(type , value) {
    if(type === 'action'){
        if(value === 'c'){
            document.getElementById('coiso').value = ''
        }
        if(value === 'delete'){
            document.getElementById('coiso').value = 
            document.getElementById('coiso').value.substring(0, document.getElementById('coiso').value.length - 1)
        }
        if(value === '+' || value === '-' || value === '/' || value === '*' || value === '.'){
            document.getElementById('coiso').value += value
        }
        if(value === '='){
            var finalvalue = eval(document.getElementById('coiso').value)
            document.getElementById('coiso').value = finalvalue
        }
    }else if(type === 'value'){
        document.getElementById('coiso').value += value
    }
}