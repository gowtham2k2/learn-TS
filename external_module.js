var externalModule;
(function (externalModule) {
    externalModule.name = "i am kavin";
    function outData() {
        return "hey man whassup man " + externalModule.name;
    }
    externalModule.outData = outData;
})(externalModule || (externalModule = {}));
