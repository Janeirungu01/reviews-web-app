import React from 'react';



const GridComponent = () => {
  return (
    <>
    <div className="grid-container">
      {/* Row 1 */}
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      
      {/* Row 2 */}
      <div className="grid-item">Item 4</div>
      <div className="grid-item">Item 5</div>
      <div className="grid-item">Item 6</div>
      
      {/* Row 3 */}
      <div className="grid-item">Item 7</div>
      <div className="grid-item">Item 8</div>
      <div className="grid-item">Item 9</div>
    </div>

    </>
  );
}

export default GridComponent;
