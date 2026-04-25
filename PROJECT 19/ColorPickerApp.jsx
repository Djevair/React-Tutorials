const { useState } = React;

export const ColorPicker = () => {

  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return(
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <h1>Color Picker App</h1>
      <p>Type a color to change the color of the app</p>
      <input
        type="color" 
        id="color-input"
        value={color}                 
        onChange={handleColorChange}
      />
    </div>
  )
};
