import './introCube.scss';

export default function IntroCube() {
    window.onload = function() {
        function RangeDisplay( input ) {
            this.input = input;
            this.output = document.createElement('span');
            this.output.className = 'range-display';
            this.units = this.input.getAttribute('data-units') || '';
            // events
            var onChange = this.update.bind( this );
            this.input.addEventListener( 'change', onChange );
            this.input.addEventListener( 'input', onChange );
            // set initial output
            this.update();
            this.input.parentNode.appendChild( this.output );
          }
          
          RangeDisplay.prototype.update = function() {
            this.output.textContent = this.input.value + this.units;
          };
          
          /* ==================== init ==================== */
          
          // init RangeDisplays
          var ranges = document.querySelectorAll('input[type="range"]');
          for ( var i=0; i < ranges.length; i++ ) {
            new RangeDisplay( ranges[i] );
          }
          
          
          
          var scene = document.querySelector('.scene');
          var cube = document.querySelector('.cube');
          var originX = 50;
          var originY = 50;
          
          function updatePerspectiveOrigin() {
            scene.style.perspectiveOrigin = originX + '% ' + originY + '%';
          }
          
          // perspective
          var perspectiveRange = document.querySelector('.perspective-range');
          var perspectiveDisplay = perspectiveRange.parentNode.querySelector('.range-display');
          perspectiveRange.onchange = perspectiveRange.oninput = function() {
            var value = perspectiveRange.value + 'px';
            // set to none at max
            if ( value == '1000px' ) {
              value = 'none';
              perspectiveDisplay.textContent = 'none';
            }
            scene.style.perspective = value;
          };
          perspectiveRange.onchange();
          
          // origin x
          var originXRange = document.querySelector('.origin-x-range');
          originXRange.onchange = originXRange.oninput = function() {
            originX = originXRange.value;
            updatePerspectiveOrigin();
          };
          originXRange.onchange();
          
          // origin y
          var originYRange = document.querySelector('.origin-y-range');
          originYRange.onchange = originYRange.oninput = function() {
            originY = originYRange.value;
            updatePerspectiveOrigin();
          };
          originYRange.onchange();
          
          // spin cube
          var spinCubeCheckbox = document.querySelector('.spin-cube-checkbox');
          spinCubeCheckbox.onchange = function() {
            cube.classList.toggle( 'is-spinning', spinCubeCheckbox.checked );
          };
          cube.classList.toggle( 'is-spinning', spinCubeCheckbox.checked );
          spinCubeCheckbox.onchange();
          
          // backface visibility
          var backfaceCheckbox = document.querySelector('.backface-checkbox');
          backfaceCheckbox.onchange = function() {
            cube.classList.toggle( 'is-backface-hidden', !backfaceCheckbox.checked );
          };

          var cube2 = document.querySelector('.cube');
          console.log(cube2);
          cube2.classList.toggle('is-spinning',true);
    };



    return (
        <div className="introCube" id="introCube">
            <div className="scene">
                <div className="cube is-spinning">
                    {/* <div className="cube__face cube__face--front"> */}
                    {/* <img src="assets/dp.jpg" alt="profile_picture"/> */}
                    {/* </div> */}
                    {/* <img className="cube__face cube__face--front" src="assets/dp.jpg" alt="profile_picture"/>
                    <img className="cube__face cube__face--back" src="assets/dp.jpg" alt="profile_picture"/>
                    <img className="cube__face cube__face--right" src="assets/dp.jpg" alt="profile_picture"/>
                    <img className="cube__face cube__face--left" src="assets/dp.jpg" alt="profile_picture"/>
                    <img className="cube__face cube__face--top" src="assets/dp.jpg" alt="profile_picture"/>
                    <img className="cube__face cube__face--bottom" src="assets/dp.jpg" alt="profile_picture"/> */}
                    <div className="cube__face cube__face--front"></div>
                    <div className="cube__face cube__face--back">back</div>
                    <div className="cube__face cube__face--right">right</div>
                    <div className="cube__face cube__face--left">left</div>
                    <div className="cube__face cube__face--top">top</div>
                    <div className="cube__face cube__face--bottom">bottom</div>
                </div>
            </div>
            <div className="hideIntroCubeControls">
              <p>
                  <label>
                      perspective
                      <input className="perspective-range" type="range" min="1" max="1000" value="400" data-units="px" />
                  </label>
              </p>
              <p>
                  <label>
                      perspective-origin x
                      <input className="origin-x-range" type="range" min="0" max="100" value="50" data-units="%" />
                  </label>
              </p>
              <p>
                  <label>
                      perspective-origin y
                      <input className="origin-y-range" type="range" min="0" max="100" value="50" data-units="%" />
                  </label>
              </p>
              <p>
                  <label>
                      Backface visible
                      <input className="backface-checkbox" type="checkbox" checked />
                  </label>
              </p>
              <p>
                <label>
                    Spin cube
                    <input className="spin-cube-checkbox" type="checkbox" />
                </label>
            </p>
            </div>

        </div>
    )
}
