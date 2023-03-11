import React from 'react';

function Faq () {

    return (


  <div class="bgimage">
  <div id="faq" class="faqcontainer">
    <div>
      <h2 class="faqheader">Frequently Asked Questions</h2>
        <h3 class="innerheader">What is Scorigami?</h3>
          <p class="innerpar">Ever wonder what final scores have happened or never happened before? How about if a score is even possible? How about when that score has happened and who was playing in that game?  Scorigami, created by SB Nation sportswriter Jon Bois, in 2016, answers just those questions. Still have questions about Scorigami, watch the video below to have the inventor of Scorigami himself explain it to you. </p>
    </div>
    <div id="howto" class="howtocontainer">  
      <h2 class="howtoheader">How To</h2> 
        <h3 class="innerheader">How do I use this chart?</h3>
          <p class="innerpar">The winning team's score is along the top (horizontal axis) and the losing team's score is along the right (vertical axis). Scores marked in Burnt Orange have happened, scores in white have not yet happened and scores in black are impossible. You can find out more information by clicking on a cell. Why is a score impossible? Watch the video below to have the inventor of Scorigami himself explain it to you.</p>
          <iframe width="720" height="480" src="https://www.youtube.com/embed/9l5C8cGMueY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
          <a href="index.html">
            <button class="block"><b>Home</b></button>
          </a>

        </div>
    </div>
    <button><a href="index.html">HOME</a>
    </button>
  </div>

    
    )
};

export default Faq