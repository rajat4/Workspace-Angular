"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroComponent = exports.forbiddenEmailValidator = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// import { forbiddenEmailValidator } from 'src/app/shared/email.validator';
var forms_2 = require("@angular/forms");
// import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
// import { stringify } from 'querystring';
function forbiddenEmailValidator(control) {
    var forbidden = /capgemini/.test(control.value);
    return forbidden ? { 'forbiddenEmail': { value: control.value } } : null;
}
exports.forbiddenEmailValidator = forbiddenEmailValidator;
var HeroComponent = /** @class */ (function () {
    function HeroComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.zip = 400302;
        this.ROOT_URL = 'https://jsonplaceholder.typicode.com';
        this.state = 'Maharashtra';
        this.states = ['CA', 'MD', 'OH', 'VA'];
        this.states1 = ['Maharashtra', 'Karnataka'];
        this.fullname = new forms_1.FormGroup({ n: new forms_1.FormControl });
        this.heroForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('Rajat', forms_1.Validators.required),
            street: new forms_1.FormControl('76 Downing Street'),
            city: new forms_1.FormControl('Navi Mumbai', forms_1.Validators.required),
            states: new forms_1.FormControl('Maharashtra', forms_1.Validators.required),
            email: new forms_1.FormControl('rajat.thawal@volksbank.nl', forms_1.Validators.email),
            power: new forms_1.FormControl('power'),
            zip: new forms_1.FormControl('zip'),
            emailDomain: new forms_1.FormControl('')
        });
        email: forms_2.AbstractControl;
        this.userForm = new forms_1.FormGroup({
            UserFirstName: new forms_1.FormControl(),
            UserLastName: new forms_1.FormControl()
        }, this.validateForm = fb.group({
            'firstName': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.required, forms_1.Validators.compose([this.checkIfA])]
        }));
        this.createForm();
        user: "abc";
    }
    HeroComponent.prototype.getPosts = function () {
        this.posts = this.http.get(this.ROOT_URL + '/company');
    };
    HeroComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeroComponent.prototype, "Email", {
        // getName 
        get: function () {
            return this.heroForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeroComponent.prototype, "Name", {
        get: function () {
            return this.heroForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    HeroComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            street: new forms_1.FormControl(''),
            city: new forms_1.FormControl('', forms_1.Validators.required),
            states: new forms_1.FormControl('states', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.email, forbiddenEmailValidator]),
            power: new forms_1.FormControl('power'),
            zip: new forms_1.FormControl('')
        });
    };
    HeroComponent.prototype.submitForm = function () {
        console.log("Fill up allllll the details");
        alert("Fill Up The form");
    };
    HeroComponent.prototype.goHome = function () {
        this.router.navigateByUrl("/home");
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'app-hero',
            templateUrl: './hero.component.html',
            styleUrls: ['./hero.component.scss',]
        })
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
var emailDomain = "capgemini";
// check_mail(){
//   if (email = nitesh@capgemini.com)
//   return true;
// }
// function check_mail(String email) {
//   email: stringify;
//   if(email == (nitesh@capgemini.com))
//   return true;
// throw new Error('Function not implemented.');
// }
var str = "The MEAN stack is MongoDB, Express.js, AngularJS, and Node.js";
str.indexOf('MongoDB') !== -1; // true
str.indexOf('Java') !== -1; //false
str.indexOf('Node', 5) !== -1; //true
console.log(str);
// console.log("Fill up allllll the details");
// var originalvalue = <HTMLInputElement>document.getElementById("getName").value;
