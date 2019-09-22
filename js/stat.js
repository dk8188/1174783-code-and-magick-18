'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var LINE_HEIGHT = 30;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 40;
var MAX_BAR_HEIGHT = 140;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(' + Math.floor(Math.random() * 100) + ', ' + Math.floor(Math.random() * 100) + '% , 50%)';// generate random color
    }
    /* calculate bar height by choosing a random index and score;
    add gap to x-axys, add (bar width + bar gap)*index to separate bars;
    add gap to y-axys add line gap multiplied by 2 to prevent overlay, add bar height (substract from max ) */
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_GAP + LINE_HEIGHT * 2 + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP);
  }
};
