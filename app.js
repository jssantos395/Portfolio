$(() => {
  currentImgIndex = 0;
  numOfImages = $('.carousel_track').children().length -1
  $('.carousel_button-right').on('click', () => {
    // stuff will go here
    $('.carousel_track').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages) {
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
});
