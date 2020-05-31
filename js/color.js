var colorWheel = new iro.ColorPicker("#colorWheelDemo", {
        layout: [
        {
          component: iro.ui.Wheel,
          options: {
            wheelLightness: true,
            wheelAngle: 0,
            wheelDirection: "anticlockwise",
            handleRadius: 10,
            wheelLightness: true
          }
        }
        ]
});

var myColor = colorWheel.color.hexString;
var colorBox = document.querySelector(".color-box");

colorWheel.on('color:change', function(color, changes) {
  myColor = colorWheel.color.hexString;
  colorBox.style.backgroundColor = myColor;
  colorBox.style.borderColor = 'white';
  console.log(myColor);
})
       