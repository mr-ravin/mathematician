import PaperTheorem10 from './A_Theorem_on_Numbers_of_the_Form_10^x.pdf';
import PaperTheoremArcs from './TheoremsForArcsOfDifferentCircles.pdf';
import './App.css';
import { MathJax} from "better-react-mathjax";

function App() {
  return (
<div>
<center><h1><b><i> Mathematician's Life </i></b></h1></center>
<br/>
<div class="middle">
     <ol>
     <li><a href={PaperTheorem10} className="colorset" target="_blank" rel="noopener noreferrer"><b>A Theorem on Numbers of the Form 10<sup>x</sup></b></a>,<br/>
      DOI Number: <a href="https://doi.org/10.51483/IJPAMR.1.1.2021.55-57
">10.51483/IJPAMR.1.1.2021.55-57</a>
          <p align="justify"><b> Abstract:</b> Number theory is one of the core branches of pure mathematics. It has played an important role in the study of natural numbers. In this paper, we are presenting a theorem on the numbers of form 10<sup>x</sup>, where x ∊ Z<sup>+</sup>. The proposed theorem have a major application in computer science. It can be used to predict ‘n’ bits which will always represent more than 10<sup>x</sup> total numbers. We proved that the nature of the ‘n’ bits is always one of the forms 10i, 10i + 4, or 10i + 7, where i ∊ Z<sup>+</sup>. 
          </p>
          <p>
          <u><i>Proposed Theorem:</i></u>
          <br/><br/>
          2<sup>(10⌊x/3⌋+4((x mod 3) mod 2)+7⌊(x mod 3)/2⌋)</sup> &gt; 10<sup>x</sup>  ; ∀ x ∈ Z<sup>+</sup>. Here, x is any positive integer.
          </p>
          <p align="justify"><b>Cite as:</b> Ravin Kumar (2021). A Theorem on Numbers of the Form 10<sup>x</sup>. International Journal of Pure and Applied Mathematics Research, 1(1), 1-3. doi: 10.51483/IJPAMR.1.1.2021.55-57.</p>
     <p align="justify">
     <u>Resources</u>:
     <br/>
     <ol>
     <li>Published paper: <a target="_blank" rel="noopener noreferrer" href="https://mr-ravin.github.io/mathematician/static/media/A_Theorem_on_Numbers_of_the_Form_10%5Ex.6ce02303.pdf">click here</a></li>
     <li>Published paper (DOI Link): <a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.51483/IJPAMR.1.1.2021.55-57">click here</a></li>
     <li>Fetch paper from github: <a target="_blank" rel="noopener noreferrer" href={PaperTheorem10}>click here</a></li>
     <li>Github repository: <a target="_blank" rel="noopener noreferrer" href="https://github.com/mr-ravin/theorem10">source code</a></li>
     </ol>
     </p>      
    </li>
     <li><a href={PaperTheoremArcs} className="colorset" target="_blank" rel="noopener noreferrer"><b>Theorems for Arcs of Different Circles having Same Arc-Angles
with Application in Concave and Convex Structures</b></a>,<br/>
          DOI Number: <a href="https://www.svedbergopen.com/files/1686285460_3_IJPAMR202208151658IN_(46-51).pdf">10.51483/IJPAMR.3.1.2023.46-51</a>
          <p align="justify"><b> Abstract:</b> Arcs are one of the fundamental concepts of circles and are also used in real-life objects such as bridges, jewelleries, buildings, tools etc. In this paper we have proposed theorems for arcs of different circles having the same arc-angles. The proposed theorems have applications in concave/convex surfaces such as lenses and mirrors, buildings, infrastructures, bridges, jewelleries, and mechanical tools such as a sickle.</p>
          <p align="justify">
          <u><i>Proposed Theorems</i></u>: <br/><br/>
          We have proposed three theorems for arcs from different circles with the same arc angle &Theta; (in degree unit) along with
          their mathematical proofs.<br/>
          <ol>
          <li>
          <b><u>Arc and Chord Length Theorem</u></b>: Arcs AB and CD having same arc-angles taken from circles with radius r<sub>1</sub> and r<sub>2</sub> respectively. The ratio of the arclengths is equal to the ratio of the line segments obtained after joining the endpoints of the individual arc.
          <br/><br/>
          <MathJax>{"\\(\\frac{\\text{Arc Length AB}}{\\text{Arc Length CD}} =  \\frac{\\text{Chord Length AB}}{\\text{Chord Length CD}} \\)"}</MathJax>
          </li>

          <li>
          <b><u>Arc and Area Theorem</u></b>: For arc AB and arc CD having same arc-angles taken from circles with radius r<sub>1</sub> and r<sub>2</sub> respectively. The ratio of the areas enclosed after joining the endpoints of the individual arcs (by a line segment) is equal to the square of the ratio of their individual arc-lengths.
          <br/><br/>
          <MathJax>{"\\(\\frac{\\text{Area enclosed by Arc AB and Chord AB}}{\\text{Area enclosed by Arc CD and Chord CD}} =  \\{\\frac{\\text{Arc Length AB}}{\\text{Arc Length CD}}\\}^2 \\)"}</MathJax>
          </li>

          <li>
          <b><u>Arc Ratio Theorem</u></b>: For arc AB and arc CD having same arc-angles taken from circles with radius r<sub>1</sub> and r<sub>2</sub> respectively.  The following
          mathematical expression is always true:
          <br/><br/>
          <MathJax>{"\\( \\frac{\\text{Area enclosed by arc AB and chord AB}}{\\text{Area enclosed by arc CD and chord CD}} =  \\{\\frac{\\text{Arc Length AB}}{\\text{Arc Length CD}}\\}^2 = \\{\\frac{\\text{Chord Length AB}}{\\text{Chord Length CD}}\\}^2\\)"}</MathJax>
          </li>
          </ol>

          </p>
          
          
          <p align="justify"><b>Cite as:</b> Ravin Kumar (2023). Theorems for Arcs of Different Circles having Same Arc-Angles with Application in Concave and Convex Structures. International Journal of Pure and Applied Mathematics Research, 3(1), 46-51. doi: 10.51483/IJPAMR.3.1.2023.46-51.</p>
     <p align="justify">
     <u>Resources</u>:
     <br/>
     <ol>
     <li>Published paper: <a target="_blank" rel="noopener noreferrer" href="https://www.svedbergopen.com/files/1686285460_3_IJPAMR202208151658IN_(46-51).pdf">click here</a></li>
     <li>Published paper (DOI Link): <a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.51483/IJPAMR.3.xx.2023.46-51">click here</a></li>
     <li>Fetch paper from github: <a target="_blank" rel="noopener noreferrer" href={PaperTheoremArcs}>click here</a></li>
     </ol>
     </p>      


     </li>
    </ol>
    </div>


</div>
  );
}

export default App;
