var colorWheel = new iro.ColorPicker("#colorWheelDemo", {
        layout: [
        {
          component: iro.ui.Wheel,
          options: {
            wheelLightness: true,
            wheelAngle: 0,
            wheelDirection: "anticlockwise",
            handleRadius: 20,
            wheelLightness: true
          }
        }
        ]
    });
       