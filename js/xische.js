/* eslint-env browser */
/*   This is the HOME page's js code 
===============The header js code==================
*/
// let ul = document.getElementById("navbar");
// var links = Array.prototype.slice.call(document.getElementsByClassName("page"));
// ul.addEventListener('mouseover',(e)=>{
//     links.forEach(link => {
//         link.style.opacity = ".5"
//     })
// });
// ul.addEventListener('mouseout',(e)=>{
//     links.forEach(link => {
//         link.style.opacity = "1"
//     })
// });

// links.forEach(link => {
//     link.addEventListener('mousemove',(e)=>{
//         link.style.opacity = "1"
//     });
//     link.addEventListener('mouseout',(e)=>{
//         link.style.opacity = ".5"
//     });
// })

/* 
$("#navbar").hover(() => {
$(".page").css({
    opacity: .5
})
})
$(".page").mousemove(function () {
$(this).css({
    opacity: .5
})
console.log("in")
})
$(".page").mouseout(function () {
$(this).css({
    opacity: 1
})
console.log("out")
})

*/

/* start slide js code */
function showParagraph(part) {
    document.getElementById(part).style.display = "block";
}

function hideParagraph(part) {
    document.getElementById(part).style.display = "none";
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







// function changeColor(bullet) {
//         // document.getElementById("bullets").classList.add('overlay');
//         if(window.location.hash == '#slider') {
//             document.getElementById(bullet).style.backgroundColor = "green";
//         }

// }







// const gambitGalleryIsInView = el => {
// 	const scroll = window.scrollY || window.pageYOffset
// 	const boundsTop = el.getBoundingClientRect().top + scroll

// 	const viewport = {
// 		top: scroll,
// 		bottom: scroll + window.innerHeight,
// 	}

//     const bounds = {
// 		top: boundsTop,
// 		bottom: boundsTop + el.clientHeight,
// 	}

// 	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
// 		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
// }


// // Usage.
// document.addEventListener( 'DOMContentLoaded', () => {
// 	const tester = document.querySelector( '#blockchain' )
// 	const answer = document.querySelector( '#bullet1' )

// 	const handler = () => raf( () => {
// 		answer.style.backgroundColor = 'Is the color changed? ' + ( gambitGalleryIsInView( '#bullet1' ) ? 'blue' : 'green' )
// 	} )

// 	handler()
// 	window.addEventListener( 'scroll', handler )
// } )


