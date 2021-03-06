// # Alipay-Supervisor Startup

var schedule = require('node-schedule');
var Supervisor = require('./alipay');

var checkOrderTask;
var dailyReportTask;

// 每分钟第30秒执行check order
function scheduleCronCheckOrdersTask(){
    checkOrderTask = schedule.scheduleJob('30 * * * * *', function(){
        Supervisor.startUp();
    }); 
}

// 每天的23点59 daily report
function scheduleCronReportTask(){
    dailyReportTask = schedule.scheduleJob({hour: 23, minute: 59}, function(){
        Supervisor.dailyReport();
    }); 
}

scheduleCronCheckOrdersTask();
scheduleCronReportTask();