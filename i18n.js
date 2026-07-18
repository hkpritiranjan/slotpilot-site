/**
 * SlotPilot i18n
 * Locale dictionaries are loaded from locales/{lang}.js and registered on
 * window.SP_LOCALES before this script runs.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'sp-lang';
  var SUPPORTED   = ['en', 'fr', 'ro'];
  var DEFAULT     = 'en';

  function getLang() {
    var s = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.indexOf(s) !== -1 ? s : DEFAULT;
  }

  function applyLang(lang) {
    var dict = (window.SP_LOCALES || {})[lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang        = lang;
    document.documentElement.dataset.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    /* Update trigger label */
    var trigger = document.getElementById('langTrigger');
    if (trigger) trigger.innerHTML = lang.toUpperCase() + ' &#9662;';

    /* Highlight active option */
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function init() {
    var trigger  = document.getElementById('langTrigger');
    var dropdown = document.getElementById('langDropdown');

    if (trigger && dropdown) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });

      document.addEventListener('click', function () {
        dropdown.classList.remove('open');
      });

      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
        if (dropdown) dropdown.classList.remove('open');
      });
    });

    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = { applyLang: applyLang, getLang: getLang };
})();
