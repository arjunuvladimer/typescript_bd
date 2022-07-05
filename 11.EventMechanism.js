// Single Threaded



function add(){
    console.log("Addition Function")
}

function wife(){
    console.log("Wife Function")
    function husband(){
        
        function son(){
            return "order"
        }
        return son
    }
    return husband
}

function division(){
    console.log("Division Function")
}

function multiply(){
    console.log("Multiply Function")
}

// Asynchronous Events Execution
add() // 1
division() // 2
setTimeout(wife,2000) // 3
multiply() // 4

// Pick : add()
// Event Queue: division(), multiply(), wife()

// Performance 
// 100 => 30 Time Delays => 




