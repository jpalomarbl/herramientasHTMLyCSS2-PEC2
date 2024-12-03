/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const headerBgChanger = document.getElementById('header-bg-changer');
const page = window.location.pathname.split('/').pop();

+( function() {
  if (page !== 'index.html' && page !== '') {
    console.log(page);
    headerBgChanger.classList.remove('bg-light');
    headerBgChanger.classList.add('bg-info');
    headerBgChanger.classList.add('header--bottom-border');
  }
} )();
