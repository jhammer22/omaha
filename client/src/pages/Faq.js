import React from 'react';
import '../styles/FaqStyles.css';

function Faq() {

  return (


    <div class="bgImage">


      <div id="faq" class="faqContainer">

        <h2 class="faqHeader-FAQ ">Frequently Asked Questions</h2>
      </div>

      <div id="faq" class="faqContainer">
        <h3 class="innerHeader">What is the Big 12 conference?</h3>
        <div id="howTo" class="howToContainer">


          <p class="innerPar">The Big 12 is a premier athletic conference comprising 10 member institutions, including Baylor, Iowa State, Kansas, Kansas State, Oklahoma, Oklahoma State, Texas, Texas Tech, TCU, and West Virginia. The conference boasts a successful history of athletic achievements, with 77 NCAA team titles and 718 individual national championships since its inception in 1996. The conference is also committed to student-athlete equity and welfare issues and has been at the forefront of college athletics reform. In 2023, the conference will add four new members: BYU, UCF, Cincinnati, and Houston. </p>
        </div>
      </div>

      <div id="faq" class="faqContainer">
        <h3 class="innerHeader">What is Scorigami?</h3>
        <div id="howTo" class="howToContainer">


          <p class="innerPar">Ever wonder what final scores have happened or never happened before? How about if a score is even possible? How about when that score has happened and who was playing in that game?  Scorigami, created by SB Nation sportswriter Jon Bois, in 2016, answers just those questions. Still have questions about Scorigami, watch the video below to have the inventor of Scorigami himself explain it to you. </p>
        </div>
      </div>


      <div id="faq" class="faqContainer">
        <h3 class="innerHeader">How do I use this chart?</h3>
        <div id="howto" class="howToContainer">


          <p class="innerPar">The winning team's score is along the top (horizontal axis) and the losing team's score is along the right (vertical axis). Scores marked in Burnt Orange have happened, scores in white have not yet happened and scores in black are impossible. You can find out more information by clicking on a cell. Why is a score impossible? Watch the video below to have the inventor of Scorigami himself explain it to you.</p>

        </div>

      </div>

      <div id="faq" class="faqContainer">
        <h2 class="innerHeader">Learn where Scororama/Scorigami started here</h2>
      <iframe className= "ytVideo" width="720" height="480" src="https://www.youtube.com/embed/9l5C8cGMueY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

   
    </div>




  )
};

export default Faq