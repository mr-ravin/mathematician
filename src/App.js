import ABRtheorem from './AdaptiveBaseRepresentationTheorem.pdf';
import PaperTheorem10 from './A_Theorem_on_Numbers_of_the_Form_10^x.pdf';
import PaperTheoremArcs from './TheoremsForArcsOfDifferentCircles.pdf';
import './App.css';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["input/tex", "output/chtml", "output/svg"] },
  tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]], displayMath: [["\\[", "\\]"]] },
  chtml: { linebreaks: { automatic: true, width: "85%" } },
  svg:   { linebreaks: { automatic: true, width: "85%" } }
};



function App() {
  return (
<MathJaxContext config={config}>
<div>
<center><h1><b><i> Mathematician's Life </i></b></h1></center>
<br/>
<div className="middle">
     <ol>
     <li><a href={ABRtheorem} className="colorset" target="_blank" rel="noopener noreferrer"><b>Adaptive Base Representation Theorem: An Alternative to Binary Number System</b></a>,<br/>
      DOI Number: <a a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-981-96-7499-2_37">10.1007/978-981-96-7499-2_37</a>
          <p align="justify"><b> Abstract:</b> This paper introduces the Adaptive Base Representation (ABR) Theorem and proposes a novel number system that offers a structured alternative to the binary number system for digital computers. The ABR number system enables each decimal number to be represented uniquely and using the same number of bits, n, as the binary encoding. Theoretical foundations and mathematical formulations demonstrate that ABR can encode the same integer range as binary, validating its potential as a viable alternative. Additionally, the ABR number system is compatible with existing data compression algorithms like Huffman coding and arithmetic coding, as well as error detection and correction mechanisms such as Hamming codes. We further explore practical applications, including digital steganography, to illustrate the utility of ABR in information theory and digital encoding, suggesting that the ABR number system could inspire new approaches in digital data representation and computational design. 
          </p>
          <p className='scrollbox'>
          <b><u><i>Adaptive Base Representation Number System:</i></u></b>
          <br/><br/>

          <MathJax>{"\\(\\text{Assume a sequence of $n$ bits } S_a = (d_{n-1}, d_{n-2},...d_2, d_1, d_0) \\text{ used to represent number in ABR Number System}.\\)"}</MathJax>

          <br/>
          <i><u>Base Calculation:</u></i>
          <br/>
          <MathJax>{"\\(\\text{Let } B_i \\text{ denote the base at index } i \\text{ in the Adaptive Base Representation System. The base values }  B_i \\text{ are calculated as follows}:\\)"}</MathJax>
                <br/>
                <MathJax>
                  {`
                  \\[
                    B_i =
                    \\begin{cases}
                      i+2 & \\text{if } i \\in \\{0,1\\} \\text{ and } n > 1. \\\\
                      2^{i+1} - 1 - \\sum_{\\substack{j \\text{ is odd} \\\\ \\text{and } j < i}} B_j & \\text{Otherwise}.
                    \\end{cases}
                  \\]
                  `}
                </MathJax>

                <br/>
                <i><u>Representation Formula:</u></i>
                <br/>
                <MathJax>{"\\(\\text{A number } v \\text{ represented in Adaptive Base Representation (i.e. ABR) Number System using } n \\text{ bits with sequence } S_a \\text{ is expressed as}:\\)"}</MathJax>
                <MathJax>
                  {`
                  \\[
                    v = \\sum_{i=0}^{n-1} (-1)^{\\epsilon(i)} d_i \\times B_i
                  \\]
                  `}
                </MathJax>
                where:
                <MathJax>
                  {`
                  \\[
                    d_i \\in \\{0, 1\\} \\text{ is the digit at index } i \\text{ in sequence } S_a.
                  \\]
                  `}
                </MathJax>
                and, 
                <MathJax>
                  {`
                  \\[
                    \\epsilon(i)=
                    \\begin{cases}
                      1 & \\text{if } i \\text{ is even, and } i \\leq n - 2, \\text{and } d_i = 1, \\text{ and } d_{i+1} = 1. \\\\
                      0 & \\text{Otherwise}.
                    \\end{cases}
                  \\]
                  `}
                </MathJax>

                <br/>
                <b><i><u>Adaptive Base Representation Theorem:</u></i></b>
                <br/>
                <MathJax>{`\\(\\text{For a given positive integer } n, \\text{ the set of numbers representable with } n \\text{ bits in the Binary Number System is identical to the set of numbers representable with } n \\text{ bits in the Adaptive Base Representation Number System}.\\)`}</MathJax>
                <br/><i>Formally,</i><br/>
                <MathJax>{"\\[\\text{Let } \\mathbb{B}_n \\text{ denote the set of numbers representable using } n \\text{ bits in the Binary Number System, and } \\mathbb{A}_n \\text{ denote the set of numbers representable using } n \\text{ bits in the Adaptive Base Representation Number System, where } n \\text{ is a positive integer. Then},\\]"}</MathJax>

                <MathJax>
                  {`
                  \\[
                    \\mathbb{B}_n = \\mathbb{A}_n, \\quad \\forall\\, n \\geq 1
                  \\]
                  `}
                where:
                </MathJax>
                <MathJax>{"\\(-\\textbf{Binary Number System Set } \\mathbb{B}_n :\\)"}</MathJax>
                <MathJax>{"\\(\\text{The sequence }S_b = (b_{n-1}, b_{n-2},...b_2, b_1, b_0) \\text{ represents binary number with } n \\text{ bits}.\\)"}</MathJax>
                <MathJax>
                  {`
                  \\[
                    \\mathbb{B}_n = \\left\\{ v \\mid v = \\sum_{i=0}^{n-1} b_i\\,2^i,\\; b_i\\in\\{0,1\\} \\right\\},\\quad
                  \\]
                  `}
                </MathJax>
                <MathJax>{"\\(-\\textbf{Adaptive Base Representation Number System Set } \\mathbb{A}_n :\\)"}</MathJax>
                <MathJax>{"\\(\\text{The sequence }S_a = (d_{n-1}, d_{n-2},...d_2, d_1, d_0) \\text{ represents adaptive base representation number with } n \\text{ bits}.\\)"}</MathJax>
                <MathJax>
                  {`
                  \\[
                    \\mathbb{A}_n = \\left\\{ v \\mid v = \\sum_{i=0}^{n-1} (-1)^{\\epsilon(i)} d_i B_i,\\; d_i\\in\\{0,1\\} \\right\\}.
                  \\]
                  `}
                </MathJax>
          
          </p>
          <p align="justify"><b>Cite as:</b> Kumar, R. (2026). Adaptive Base Representation Theorem: An Alternative to Binary Number System. In: Senjyu, T., So-In, C., Joshi, A. (eds) Smart Trends in Computing and Communications. SmartCom 2025. Lecture Notes in Networks and Systems, vol 1458. Springer, Singapore. https://doi.org/10.1007/978-981-96-7499-2_37</p>
     <p align="justify">
     <u>Resources</u>:
     <br/>
     <ol>
     <li>Published paper: <a target="_blank" rel="noopener noreferrer" href="https://link.springer.com/chapter/10.1007/978-981-96-7499-2_37">click here</a></li>
     <li>Published paper (DOI Link): <a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-981-96-7499-2_37">click here</a></li>
     <li>Paper on github.com: <a target="_blank" rel="noopener noreferrer" href={ABRtheorem}>click here</a></li>
     <li> Paper on archive.org: <a target="_blank" rel="noopener noreferrer" href="https://archive.org/details/adaptive-base-representation-theorem/AdaptiveBaseRepresentationTheorem/">click here</a></li>
     <li>Preprint on SSRN: <a target="_blank" rel="noopener noreferrer" href="http://dx.doi.org/10.2139/ssrn.5574138">click here</a></li>
     <li>Preprint on Research Gate: <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/396256763_Adaptive_Base_Representation_Theorem_An_Alternative_to_Binary_Number_System">click here</a></li>
     </ol>
     </p>      
    </li>










     <li><a href={PaperTheorem10} className="colorset" target="_blank" rel="noopener noreferrer"><b>A Theorem on Numbers of the Form 10<sup>x</sup></b></a>,<br/>
      DOI Number: <a a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.51483/IJPAMR.1.1.2021.55-57
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
     <li>Paper on github.com: <a target="_blank" rel="noopener noreferrer" href={PaperTheorem10}>click here</a></li>
     <li>Paper on Research Gate: <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/355795996_A_Theorem_on_Numbers_of_the_Form_10x">click here</a></li>
     <li>Preprint on SSRN: <a target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3460506">click here</a></li>
     <li>Preprint on osf.io: <a target="_blank" rel="noopener noreferrer" href="https://osf.io/ku45y">click here</a></li>
     <li>Preprint on Research Gate: <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/336386729_A_Theorem_on_Numbers_of_the_Form_10x">click here</a></li>
     <li>Github repository (python code): <a target="_blank" rel="noopener noreferrer" href="https://github.com/mr-ravin/theorem10">source code</a></li>
     </ol>
     </p>      
    </li>
     <li><a href={PaperTheoremArcs} className="colorset" target="_blank" rel="noopener noreferrer"><b>Theorems for Arcs of Different Circles having Same Arc-Angles
with Application in Concave and Convex Structures</b></a>,<br/>
          DOI Number: <a a target="_blank" rel="noopener noreferrer" href="https://www.svedbergopen.com/files/1686285460_3_IJPAMR202208151658IN_(46-51).pdf">10.51483/IJPAMR.3.1.2023.46-51</a>
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
          <br/>
          <li>
          <b><u>Arc and Area Theorem</u></b>: For arc AB and arc CD having same arc-angles taken from circles with radius r<sub>1</sub> and r<sub>2</sub> respectively. The ratio of the areas enclosed after joining the endpoints of the individual arcs (by a line segment) is equal to the square of the ratio of their individual arc-lengths.
          <br/><br/>
          <MathJax>{"\\(\\frac{\\text{Area enclosed by Arc AB and Chord AB}}{\\text{Area enclosed by Arc CD and Chord CD}} =  \\{\\frac{\\text{Arc Length AB}}{\\text{Arc Length CD}}\\}^2 \\)"}</MathJax>
          </li>
          <br/>
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
     <li>Paper on github.com: <a target="_blank" rel="noopener noreferrer" href={PaperTheoremArcs}>click here</a></li>
     <li>Paper on Research Gate: <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/371418079_Theorems_for_Arcs_of_Different_Circles_Having_Same_Arc-Angles_with_Application_in_Concave_and_Convex_Structures">click here</a></li>
     <li>Preprint on SSRN: <a target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4474362">click here</a></li>
     <li>Preprint on osf.io: <a target="_blank" rel="noopener noreferrer" href="https://osf.io/s2azj">click here</a></li>
     <li>Preprint on Research Gate: <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/371713594_Theorems_for_Arcs_of_Different_Circles_having_Same_Arc-Angles_with_Application_in_Concave_and_Convex_Structures">click here</a></li>
     </ol>
     </p>      


     </li>
    </ol>
    </div>


</div>
</MathJaxContext>
  );
}

export default App;
