function getArea() {
    theValueofRadius = document.getElementById("radiusVal").value;
    computedArea = areaCompute(theValueofRadius);
    document.getElementById("result").innerHTML = "The area of circle is " + computedArea;
}
function areaCompute(theValueofRadius) {
    const theValueofPI = 3.1416;
    computationForTheArea = theValueofPI * theValueofRadius**2;
    return computationForTheArea;
}
    