var Study = artifacts.require('./Study.sol');
var StudyData = artifacts.require("./StudyData.sol");


module.exports = function(deployer) {
   // deployer.deploy(StudyData);
    deployer.deploy(Study);

};
