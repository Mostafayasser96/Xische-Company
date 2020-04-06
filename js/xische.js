/* eslint-env browser */

/* start slide js code */
function showParagraph(part) {
    document.getElementById(part).style.display = "block";
    document.getElementById("main-slide").style.backgroundColor = "#1d2b64";
}

function hideParagraph(part) {
    document.getElementById(part).style.display = "none";
    document.getElementById("main-slide").style.backgroundColor = "grey";
}
/* End slide js code */

// This is the start of bullets js code
function iconScrollToDiv(number) {
    window.scrollTo(0, number);
}
function hideIcon() {
    if (window.scrollY >= 10) {
        document.getElementById("icon").classList.add('hidden')
    } else {
        document.getElementById("icon").classList.remove('hidden')
    }
}

var elements = [
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet'],
    ['id', 'bullet']
]

let clicking = false;

function scrollInDiv(id, bullet) {
    clicking = true;
    var div = document.getElementById(id);
    div.scrollIntoView();
    changeColor(bullet);
    setTimeout(() => {
        clicking = false
    }, 6000)
}

function changeColor(bullet) {
    console.log(bullet);
    document.querySelectorAll('#bullets li').forEach(el => {
        el.style = 'background: white'
    })
    return document.getElementById(bullet).style = 'background: #513F8D';
}

 window.onscroll = function() {
    hideIcon() // to animate arrow down
    let sliderDiv = document.getElementById('slider').offsetTop;
    let recentArticlesDiv = document.getElementById('recent-articles').offsetTop;
    let blockChainDiv = document.getElementById('blockchain').offsetTop;
    let latestReportsDiv = document.getElementById('latest-reports').offsetTop;
    let partnersDiv = document.getElementById('partners').offsetTop;
    let featuredProjectsDiv = document.getElementById('featured-projects').offsetTop;
    let reportsDiv = document.getElementById('report-excerptss').offsetTop;
    let footerDiv = document.getElementById('footer').offsetTop;

    
    
    
    if (!clicking) {
        if (window.pageYOffset < sliderDiv) {
            changeColor('bullet1');
        } else if (window.pageYOffset > sliderDiv && window.pageYOffset < recentArticlesDiv) {
            changeColor('bullet1');
        } else if (window.pageYOffset > recentArticlesDiv && window.pageYOffset < blockChainDiv) {
            changeColor('bullet2');
        } else if (window.pageYOffset > blockChainDiv && window.pageYOffset < latestReportsDiv) {
            changeColor('bullet3');
        } else if (window.pageYOffset > latestReportsDiv && window.pageYOffset < partnersDiv) {
            changeColor('bullet4');
        } else if (window.pageYOffset > partnersDiv && window.pageYOffset < featuredProjectsDiv) {
            changeColor('bullet5');
        } else if (window.pageYOffset > featuredProjectsDiv && window.pageYOffset < reportsDiv) {
            changeColor('bullet6'); 
        } else if (window.pageYOffset > reportsDiv && window.pageYOffset < footerDiv) {
            changeColor('bullet7');
        } else if (window.pageYOffset > footerDiv) {
            changeColor('bullet8');
        }
    }

}

