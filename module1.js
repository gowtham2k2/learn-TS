var mySpace1;
(function (mySpace1) {
    mySpace1.name = "i am Gowtham";
    function outData() {
        return "hey man whassup man " + mySpace1.name;
    }
    mySpace1.outData = outData;
})(mySpace1 || (mySpace1 = {}));
