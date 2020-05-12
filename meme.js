const form = document.querySelector('#memeform')
const imgSrcInput = document.querySelector('input[name="imgurl"]')
const topTextInput = document.querySelector('input[name="toptext"]')
const btmTextInput = document.querySelector('input[name="bottomtext"]')
const results = document.querySelector('#results')
const meme = document.querySelector('.container')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(imgSrcInput.value, topTextInput.value, btmTextInput.value);
    results.appendChild(newMeme);
});

function makeMeme(image, toptxt, btmtxt){
    //make container div for image
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('container');
    //make image
    const img = new Image();
    //set image src to be the url that is input
    img.src = image;
    memeDiv.appendChild(img);
    imgSrcInput.value = '';

    //Top Text Div
    const toptext = document.createElement('div');
    //if nothing in top text input, don't make a top text div
    if(topTextInput.value.length < 1){
        toptext.classList.add('hidden');
    } else {
        //make a 'top text' div
        toptext.classList.add('top-centered');
        toptext.innerText = toptxt;
        //attach 'top text' div to top of image
        memeDiv.appendChild(toptext);
        topTextInput.value = '';
    }

    //Bottom Text Div
    const btmtext = document.createElement('div');
    //if nothing in bottom text input, don't make a bottom text div
    if(btmTextInput.value.length < 1){
        btmtext.classList.add('hidden');
    } else {
        //make a 'bottom text' div
        btmtext.classList.add('btm-centered');
        btmtext.innerText = btmtxt;
        //attach 'bottom text' div to bottom of image
        memeDiv.appendChild(btmtext);
        btmTextInput.value = '';
    }

    //Delete Divs for Overlay and Button
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete Me";
    memeDiv.appendChild(overlayDiv);
    memeDiv.appendChild(deleteBtn);

    return memeDiv;
}

// function topTextMeme(){
// }

// function btmText(){
// }

results.addEventListener('click',function(e){
        if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        }
    });

