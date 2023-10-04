
function createdot(parentelem, period, radius)
{
    var  svgns = "http://www.w3.org/2000/svg";
    let dotelem = document.createElementNS(svgns, "g");
    dotelem.classList.add("dotouter");
    dotelem.setAttribute("style", "animation-duration: " + period + "ms");

    let circleelem = document.createElementNS(svgns, "circle");
    circleelem.setAttribute("cx" ,0);
    circleelem.setAttribute("cy" ,0);
    circleelem.setAttribute("r" ,5);
    circleelem.setAttribute("fill" ,"yellow");
    circleelem.setAttribute("transform" , "translate(" + radius + " 0)");
    dotelem.appendChild(circleelem);
    parentelem.appendChild(dotelem);
}


function createAllDots(nofDots, minRadius, maxRadius, minPeriod, maxPeriod)
{
    let dotselem = document.getElementById("dotswrapper");

    for(i=0; i<nofDots; i++)
    {    
        let deltaPeriod = (maxPeriod - minPeriod) / nofDots;
        let period = minPeriod + deltaPeriod * i;
        let deltaRadius = (maxRadius - minRadius) / nofDots;
        let radius = maxRadius - (minRadius + deltaRadius * i);
        createdot(dotselem, period, radius);
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    createAllDots(32, 10, 100, 900, 1000);
});



