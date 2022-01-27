$(() => {

////////////////////////////////////////////////////////////////////////////
// CAROUSEL
////////////////////////////////////////////////////////////////////////////
  currentImgIndex = 0;
  numOfImages = $('.carousel_track').children().length -1

  // select carousel button when clicked on
  $('.carousel_button-right').on('click', () => {
    // find the children of Ul carousel_track and hide current image
    $('.carousel_track').children().eq(currentImgIndex).css('display', 'none')
    // if number of images is less than the current image
    if (currentImgIndex < numOfImages) {
      // add 1 to currentImgIndex
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    console.log(currentImgIndex);
    $('.carousel_track').children().eq(currentImgIndex).css('display', 'block')
  })
  $('.carousel_button-left').on('click', () => {
    $('.carousel_track').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex > 0) {
      currentImgIndex--
    } else {
      currentImgIndex = numOfImages
    }
    $('.carousel_track').children().eq(currentImgIndex).css('display', 'block')
  })

  ////////////////////////////////////////////////////////////////////////////
  // CAROUSEL
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // RESUME POP UP
  ////////////////////////////////////////////////////////////////////////////
// show popup
  $('#show-popup-button').click(() => {
    $('#popup-container').show()
  })

// close pop up
$('#close-btn').click(() => {
  $('#popup-container').hide( )
})
////////////////////////////////////////////////////////////////////////////
// RESUME POP UP
////////////////////////////////////////////////////////////////////////////



});
