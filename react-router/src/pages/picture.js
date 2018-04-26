
  import React from 'react';
  import CommentBox from '../components/comment-box';

export default class PicturePage extends React.Component{

  render(){

    return(
                <div>
                  
   <div className="cell">
      <article className="article">
        <h1 className="article-title">Picture, Related to Robotics</h1>

        <div className="article-body">
          <p>
            The term “artificial intelligence” has been floating around since the
            mid-20th century &mdash; a phrase encompassing “the science and engineering
            of intelligent machines.” But what of robots’ emotional intelligence?
            Though humans largely fear this aspect of the robot race, there’s no
            need. According to the handbook for the Society of Emotionally
            Available Robots (SEAR):
          </p>
          <blockquote>
            What humans need to understand is that all beings simply want to love
            and be loved. After all, as the Beatles sang, “All you need is love.”
            (Moving past the fact, of course, that the lyric “love” was
            originally “oil,” as the Beatles were the original robot band and
            required oil to survive.)
          </blockquote>
         <div className="article-body-picture">
           <img src="assets/images/gojetters.png"/>
         </div>
        </div>

      </article>
    </div>


<CommentBox apiUrl="api/picture/comments.json" />


                 </div>
      )
  }
}


