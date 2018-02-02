var StudyLog = artifacts.require("./StudyLog.sol");
var StudyData = artifacts.require("./StudyData.sol");

module.exports = function(deployer) {
  deployer.deploy(StudyLog);
  deployer.deploy(StudyData);
};
