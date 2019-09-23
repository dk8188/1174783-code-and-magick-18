// Файл setup.js
'use strict';
/**
 * основные параметры
 * @param {string} wizardNames — имена магов
 * @param {string} wizardFamilyNames — фамилии магов
 * @param {string}  сoatColors — цвета мантий
 * @param {string}  eyesColors — цвета глаз
 * @param {object}  setup - диалоговое окно, настройки

 */

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// eslint-disable-next-line no-unused-vars
var wizardFamilyNames = ['да Марья', 'Хуан Верон', 'Мирабелла', 'Ирвинг', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var coatColors = ['rgb(101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

/**
 * генерирует создает мага
 */

var wizards = [
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)],
    familyName: wizardFamilyNames[Math.floor(Math.random() * wizardNames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)],
    familyName: wizardFamilyNames[Math.floor(Math.random() * wizardNames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)],
    familyName: wizardFamilyNames[Math.floor(Math.random() * wizardNames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)],
    familyName: wizardFamilyNames[Math.floor(Math.random() * wizardNames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
  }
];

// eslint-disable-next-line valid-jsdoc
/**
 * вызывыет html елемент через querySelector и вностит полученные выше значения
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.familyName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-head').style.fill = wizard.hairColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
