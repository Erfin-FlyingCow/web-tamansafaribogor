import React from 'react';
import $ from 'jquery';

class ScrollTop extends React.Component {
  componentDidMount() {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 100) {
        $('#scroll-top-button').fadeIn();
      } else {
        $('#scroll-top-button').fadeOut();
      }
    });
  }

  handleClick() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  }

  render() {
    return (
        <div className='text-right mr-4 text-2xl'>
            <button style="background-color: silver; padding: 10px; border: none; outline: none; cursor: pointer; position: relative;">
              &#9650;
            </button>
            
        </div>
    );
  }
}

export default ScrollTop;
