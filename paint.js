var canvas = document.getElementById("canvas")
var context = canvas.getContext('2d')
let tool = "Paint"
let color = "lime"
let PenSize = 30;
let mouseX = null;
let mouseY = null;
let mousedown = false;
let colorpicker = document.getElementById("ColorWheel")
let PenSizePicker = document.getElementById("number")
let backgroundColorpicker = document.getElementById("backgroundcolor")
PenSizePicker.value = 30;

backgroundColorpicker.addEventListener('change', function(event)
{
    ChangeBackgroundColor(backgroundColorpicker.value)
})

canvas.addEventListener('mousemove', function(event)
{
    var rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left - 20
    mouseY = event.clientY - rect.top- 20
    MouseMove()
})

canvas.addEventListener('mousedown', function(event)
{
   if(event.button === 0 )
   {
        mousedown = true
        MouseMove()
   }
})

canvas.addEventListener('mouseup', function(event)
{
    if(event.button === 0 )
   {
        mousedown = false
   }
})

function MouseMove()
{
    if(mousedown == true)
    {
        if(tool == "Paint")
        {
            color = colorpicker.value
            PenSize = PenSizePicker.value
            context.beginPath();
            context.arc(mouseX, mouseY, PenSize/2, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
        }
    }
}

function ChangeBackgroundColor(color)
{
    canvas.style.backgroundColor = color
}

function EraseAll()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}
