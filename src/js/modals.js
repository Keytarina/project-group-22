!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    body = document.querySelector('body');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      modalElem.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('no-scroll');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.querySelector('body').classList.remove('no-scroll');
  });
});

var element = document.getElementById('table-phone');
var maskOptions = {
  mask: '+{38}(000)000-00-00',
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('room-phone');
var maskOptions = {
  mask: '+{38}(000)000-00-00',
};
var mask = IMask(element, maskOptions);

let price2 = 500;

document.getElementById('nights2').addEventListener('change', e => {
  document.getElementById('price2').innerHTML = e.target.value * price2;
});

let price2l = 1000;

document.getElementById('nights2l').addEventListener('change', e => {
  document.getElementById('price2l').innerHTML = e.target.value * price2l;
});

let price3 = 1500;

document.getElementById('nights3').addEventListener('change', e => {
  document.getElementById('price3').innerHTML = e.target.value * price3;
});
