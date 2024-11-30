var menuIcon = document.querySelector('.menu-icon')
var sidebar = document.querySelector('.sidebar')
var container = document.querySelector('.banner-container')
var settingMenu = document.querySelector('.profile-dets')
var settingMenuIcon = document.querySelector('.profile-icon')

menuIcon.addEventListener('click', ()=>{
  sidebar.classList.toggle('small-sidebar')
  container.classList.toggle('large-container')
})

settingMenuIcon.addEventListener('click', ()=>{
  settingMenu.classList.toggle('profile-setting-menu')
})