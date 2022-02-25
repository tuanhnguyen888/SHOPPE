const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnRegister = $$(".header__navbar-item--strong");
console.log(btnRegister)

const modal = $(".modal");
const modalOverlay = $('.modal__overlay');

const authForm = $$('.auth-form');
const btnBack = $$('.auth-form__control-back')

console.log(authForm);

	
btnRegister[0].addEventListener('click',function() {
	modal.classList.remove('display-none');
	authForm[0].classList.remove('display-none');
})

btnBack[0].addEventListener('click',function() {
	modal.classList.add('display-none');
	authForm[0].classList.add('display-none');
})

btnRegister[1].addEventListener('click',function() {
	modal.classList.remove('display-none');
	authForm[1].classList.remove('display-none');
})

btnBack[1].addEventListener('click',function() {
	modal.classList.add('display-none');
	authForm[1].classList.add('display-none');
})

modalOverlay.addEventListener('click',function() {
	modal.classList.add('display-none');
	authForm[1].classList.add('display-none');	
	authForm[0].classList.add('display-none');	
})



// 

const itemLike = $$(".home-product-item__like");

console.log(itemLike[1]);

for (var i = 0; i < itemLike.length; i++) {
	itemLike[i].addEventListener('click',function () {
		this.classList.toggle("home-product-item__like--liked");
	})

}