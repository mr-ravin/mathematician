import React from 'react';
import ReactDOM from 'react-dom';
import stylecode from"./index.css";
import mathlogo from "./maths.png";

class App extends React.Component {
render(){
  return (
    <div>    <img src={mathlogo} className="algn"/>
    <center><h1><b><i> Mathematician's Life </i></b></h1></center>
    
   <div class="middle">
     <ol>
     <li><a href="https://mr-ravin.github.io/mathematician/static/media/A_Theorem_on_Numbers_of_the_Form_10%5Ex.6ce02303.pdf" className="colorset"><b>A Theorem on Numbers of the Form 10<sup>x</sup></b></a> , DOI Number: <a href="https://doi.org/10.51483/IJPAMR.1.1.2021.55-57
">10.51483/IJPAMR.1.1.2021.55-57</a>
          <p align="justify"><b> Abstract:</b> Number theory is one of the core branches of pure mathematics. It has played an important role in the study of natural numbers. In this paper, we are presenting a theorem on the numbers of form 10<sup>x</sup>, where x ∊ Z<sup>+</sup>. The proposed theorem have a major application in computer science. It can be used to predict ‘n’ bits which will always represent more than 10<sup>x</sup> total numbers. We proved that the nature of the ‘n’ bits is always one of the forms 10i, 10i + 4, or 10i + 7, where i ∊ Z<sup>+</sup>. 
          </p>
          <p>
          <u><i>Proposed Theorem:</i></u>
          <br/><br/>
          2<sup>10⌊x/3⌋+4((x mod 3) mod 2)+7⌊(x mod 3)/2⌋)</sup> &gt; 10<sup>x</sup>  ; ∀ x ∈ Z+. Here, x is any positive integer.
          </p>
          <p align="justify"><b>Cite as:</b> Ravin Kumar (2021). A Theorem on Numbers of the Form 10<sup>x</sup>. International Journal of Pure and Applied Mathematics Research, 1(1), 1-3. doi: 10.51483/IJPAMR.1.1.2021.55-57.</p>
          <p align="justify"><b>Github repository</b>: <a href = "https://github.com/mr-ravin/theorem10">https://github.com/mr-ravin/theorem10</a></p>
          <br/>
     </li>
     <li><a href="https://mr-ravin.github.io/mathematician/static/media/TheoremsForArcsOfDifferentCircles.pdf" className="colorset"><b>Theorems for Arcs of Different Circles having Same Arc-Angles
with Application in Concave and Convex Structures</b></a> , DOI Number: <a href="https://www.svedbergopen.com/files/1686285460_3_IJPAMR202208151658IN_(46-51).pdf">10.51483/IJPAMR.3.1.2023.46-51</a>
          <p align="justify"><b> Abstract:</b> Arcs are one of the fundamental concepts of circles and are also used in real-life objects such as bridges, jewelleries, buildings, tools etc. In this paper we have proposed theorems for arcs of different circles having the same arc-angles. The proposed theorems have applications in concave/convex surfaces such as lenses and mirrors, buildings, infrastructures, bridges, jewelleries, and mechanical tools such as a sickle.</p>
          <p align="justify"><b>Cite as:</b> Ravin Kumar (2023). Theorems for Arcs of Different Circles having Same Arc-Angles with Application in Concave and Convex Structures. International Journal of Pure and Applied Mathematics Research, 3(1), 46-51. doi: 10.51483/IJPAMR.3.1.2023.46-51.</p>
     </li>
    </ol>
    </div>
    </div>
  );
}
}

export default App;
